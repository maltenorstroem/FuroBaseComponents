
export const Types ={"furo.spec.field":{"name":"furo.spec.field","type":"furo.spec.field","description":"Defines a field in the furo spec","fields":{"description":{"description":"the field description","type":"string","meta":{},"options":{},"__proto":{"number":1}},"type":{"description":"the field type","type":"string","meta":{},"options":{},"__proto":{"number":2}},"meta":{"description":"meta information for the client, like label, default,...","type":"any","meta":{},"options":{},"__proto":{"number":3}},"options":{"description":"options for a field","meta":{},"options":{},"type":"any","__proto":{"number":4}},"repeated":{"description":"is this field repeated","meta":{},"options":{},"type":"bool","__proto":{"number":5}},"__proto":{"description":"information for the proto generator","type":"any","__proto":{"number":6}}}},"furo.spec.type":{"name":"furo.spec.type","type":"furo.spec.type","description":"Defines a type in the furo spec","fields":{"name":{"description":"Name of the type","type":"string","meta":{},"options":{},"__proto":{"number":1}},"type":{"description":"the type ","type":"string","meta":{},"options":{},"__proto":{"number":2}},"description":{"description":"the type description","type":"string","meta":{},"options":{},"__proto":{"number":3}},"fields":{"description":"fields of a type","type":"map<string,furo.spec.field>","repeated":true,"meta":{},"options":{},"__proto":{"number":4}},"__proto":{"description":"information for the proto generator, should be removed for the client spec","type":"any","__proto":{"number":5}}}}}