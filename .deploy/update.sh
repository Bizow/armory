#!/bin/sh

rm -r ../public
mkdir -p ../public
cp -r ../.blend/build_armory/html5/ ../public/
rm ../public/index.html