'use strict';

const fs = require('fs');

function logSpecificFile(filename, cb) {
  fs.readFile(`${__dirname}/../assets/${filename}`, function (err, res) {
    if(err){
      cb(err,undefined);
    }
    cb(err,res.slice(0,8).toString('hex'));
  });
}

exports.logData = function(files, cb) {
  var  loopCount = 0;
  var results = [];
  function getResults(err,res){
    if(err){
      cb(err, res);
      return;
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
      logSpecificFile(files[loopCount], getResults);
    }
  }
  logSpecificFile(files[0], getResults);
}
