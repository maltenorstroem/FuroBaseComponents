#!/usr/bin/env bash


polymer build
cp -r ./build/es6-bundled/* ./docs/

cp ./docs/index.html ./docs/404.html

touch ./docs/.nojekyll

cd docs
echo "Check before commit"

superstatic
