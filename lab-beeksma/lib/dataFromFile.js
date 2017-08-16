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

exports.logData = function(files, fetchFunction, cb) {
  var  loopCount = 0;
  var results = [];
  function getResults(err,res){
    if(err){
      cb(err, res);
      throw err;
    }
    if(res){
      console.log(res);
      results.push(res);
    }
    loopCount++;
    if (loopCount === files.length) {
      cb(results);
      return;
    }
    else {
      fetchFunction(files[loopCount], getResults);
    }
  }
  fetchFunction(files[0], getResults);
}

exports.logData(files, delay, console.log);
