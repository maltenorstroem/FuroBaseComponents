#!/usr/bin/env node


const fs = require('fs');
const os = require('os');
const path = require('path');
const execSync = require('child_process').execSync;

let config;
// config öffnen
if (fs.existsSync('./furo.spec.conf.json')) {
  config = JSON.parse(fs.readFileSync('./furo.spec.conf.json'));
} else {
  console.log("furo.spec.conf.json not found, you can copy an example from " + path.normalize(__dirname + "/../"));
  process.exit(1);
}

const templateDirBundled = config.custom_template_dir || __dirname + "/templates/bundled";
const templateDirSingle = config.custom_template_dir || __dirname + "/templates/single";
const templateDirBase = config.custom_template_dir || __dirname + "/templates";


function sh(command, arguments) {
  execSync(command + " " + arguments.join(" "), {stdio: 'inherit'});
}


// check if the folder is a sub directory of the project
let buildpath = path.normalize(process.cwd() + "/" + config.build_output_dir);
let cwd = process.cwd();
if (buildpath.search(cwd) === -1) {
  // buildpath outside cwd
  console.log("buildpath outside current working directory, this is to dangerous, because we delete some files. Please update the config");
  process.exit(1);
}
// clean the build folder
sh("rm -rf", [buildpath + "/*"]);
sh("mkdir -p", [buildpath]);

// preprocess
sh(__dirname + "/prepare.sh", [config.spec_dir]);
sh(__dirname + "/prepareBundled.sh", [config.spec_dir]);


console.log("****Preprocessing****");
// Mix conf.import,...  with services_bundled
let bundled_services = JSON.parse(fs.readFileSync('./__tmp/services_bundled.json'));
let bundled_messages = JSON.parse(fs.readFileSync('./__tmp/types_bundled.json'));

// join the bundled files
let bundle = {config: config.bundled, services: bundled_services.services, messages: bundled_messages.types}


// remove package names on messages for bundled messages and types
for (let srv in bundle.services) {
  for (let m in bundle.services[srv].services) {
    let method = bundle.services[srv].services[m];
    if (method.data.request) {
      method.data.request = method.data.request.replace(/^(?!google|furo)[^\.]*\.(.*)/gm, "$1");
    }
    if (method.data.response) {
      method.data.response = method.data.response.replace(/^(?!google|furo)[^\.]*\.(.*)/gm, "$1");
    }
  }
}

for (let t in bundle.messages) {
  for (let f in bundle.messages[t].fields) {
    let field = bundle.messages[t].fields[f];
    field.type = field.type.replace(/^(?!google|furo)[^\.]*\.(.*)/gmi, "$1");
    if(field.__proto && field.__proto.type){
      field.__proto.type= field.__proto.type.replace(/^(?!google|furo)[^\.]*\.(.*)/gmi, "$1");
    }
    if(field.__proto && field.__proto.map_to){
      field.__proto.map_to= field.__proto.map_to.replace(/^(?!google|furo)[^\.]*\.(.*)/gmi, "$1");
    }
  }
}

fs.writeFileSync("./__tmp/bundled.json", JSON.stringify(bundle));
// EOF remove package names on messages for bundled messages and types

let singlebuildpath = buildpath + "/packages/";
fs.mkdirSync(singlebuildpath);
sh(__dirname + "/generateSingleFiles.sh",[singlebuildpath, config.spec_dir, templateDirSingle])


// Create proto files
console.log("****Generate Bundled Proto****");
let bundledbuildpath = buildpath + "/bundled/";

let bundledbuildpathprotos = bundledbuildpath + "protos/" + config.bundled.package_name + "/";

sh("mkdir",["-p", bundledbuildpathprotos])
sh("simple-generator", ["-d", "./__tmp/bundled.json", "-t", templateDirBundled + "/bundled.services.proto.tmpl", ">", bundledbuildpathprotos + config.bundled.package_name + ".proto"])
console.log("****Protoc Bundled****");

// copy basetypes to bundled
sh("cp",["-r", singlebuildpath + "/protos/furo", bundledbuildpath+ "/protos/furo"]);
sh("cp",["-r", singlebuildpath + "/protos/google", bundledbuildpath+ "/protos/google"]);

// bundled build
sh(__dirname + "/protocBundled.sh", [bundledbuildpathprotos]);

console.log("****Protoc Single****");
// build the command
sh("simple-generator", ["-d ./furo.spec.conf.json", "-t", templateDirBase + "/protocHelper.sh.tmpl", ">" ,"./__tmp/protocHelper.sh"]);
// make it executable
sh("chmod",["755","./__tmp/protocHelper.sh"]);

config.packages.forEach((pkg)=>{
console.log("Package " + pkg);
  //sh(__dirname + "/_protocHelper.sh", [singlebuildpath + "protos",pkg]);
  sh("./__tmp/protocHelper.sh", [singlebuildpath + "protos",pkg]);

});

// environment build
console.log("****furo environment build****");
let services = JSON.parse(fs.readFileSync('./__tmp/services.json'));
let types = JSON.parse(fs.readFileSync('./__tmp/types.json'));
let bundledImport = new Set();
let apiSpecs = "";

// add the services
let s = {};
services.services.forEach((service) => {
  s[service.name] = service;
});
apiSpecs = `export const Services =` + JSON.stringify(s);

let t = {};
types.types.forEach((type) => {
  t[type.__proto.package + "." + type.type] = type
});
apiSpecs += `\nexport const Types =` + JSON.stringify(t);
fs.writeFileSync(buildpath+ "/" + config.furo_env_name , apiSpecs);

console.log("env file created");

// gateway build


