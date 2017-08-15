const assert = require('assert');
const fileTest = require('../lib/dataFromFile');

describe('dataFromFile', function() {
  describe('#logData()', function() {
    it ('should call callback with err if any file in the argument array supplied is not found and then retun undefined', function(done) {
      fileTest.logData(['some','files','go','here'], function (err, data) {
          //check for error here, use some different positions in the array
        done();
      });
      it ('should return an array with the first 8 characters of each file in the argument array in order', function(done) {
        fileTest.logData(['some','files','go','here'], function (err, data) {
            //check that the result array comes back with the correct sterf
          done();
        });
      });
    });
  });
});

// one.txt 48 61 72 61 6c 64 20 53
// two.txt 54 68 65 20 75 6e 61 6e
// three.txt 49 27 6d 20 70 61 63 6b
