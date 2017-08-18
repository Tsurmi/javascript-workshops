#!/usr/bin/env bash

git remote add upstream https://github.com/AmericaCampaign/javascript-workshops.git

DIR=`dirname "$0"`
cd ${DIR}/data-and-functions-1 && npm install
cd ../data-and-functions-2 && npm install
cd ../data-and-functions-3 && npm install
cd ..

