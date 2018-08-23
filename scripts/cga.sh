#!/bin/bash
currentDir=$(pwd)
cd ..
npm init react-app $1
cd $1
npm install --save '@gen3/ui-component'
# install more things
# copy over UI files
cp $currentDir/src/App.js src/App.js
cp $currentDir/src/App.css src/App.css
npm start
