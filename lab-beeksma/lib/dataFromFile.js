'use strict';

const fs = require('fs');

var files = ['one.txt', 'two.txt', 'three.txt'];


function delay (filename, cb){
  setTimeout( () => {
    cb(null,filename);
  },500 + Math.random()*1000);
}

function logSpecificFile(filename, cb) {
  fs.readFile(`${__dirname}/../assets/${filename}`, function (err, res) {
    cb(err,res.slice(0,8).toString('hex'));
  });
}

function logData(files, fetchFunction, cb) {
  var loopCount = 0,
    results = [];
  files.forEach(function (item) {
    fetchFunction(item, function (err,res) {
      loopCount ++;
      results.push(res);
      if (loopCount === files.length) {
        cb(results);
      }
    });
    console.log('fetch ' + item);
  });
}

logData(files, delay, console.log);
