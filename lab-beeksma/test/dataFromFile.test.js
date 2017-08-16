const assert = require('assert');
const fileTest = require('../lib/dataFromFile');

describe('dataFromFile', function() {
  describe('#logData()', function() {
    it ('should call callback with err if any file in the argument array supplied is not found and then retun undefined', function(done) {
      fileTest.logData(['one.txt','donkey.txt','three.txt'], function (err, res) {
        assert.notStrictEqual(err, null);
        assert.strictEqual(res, undefined);
        done();
      });
    });
    it (`should return an array with the first 8 characters of each file in the argument array in correct order for ['one.txt','two.txt','three.txt']`, function(done) {
      fileTest.logData(['one.txt','two.txt','three.txt'], function (err, res) {
        assert.ifError(err);
        assert.deepEqual(res, [ '486172616c642053', '54686520756e616e', '49276d207061636b' ]);
        done();
      });
    });
    it (`should return an array with the first 8 characters of each file in the argument array in correct order for ['three.txt','two.txt','one.txt']`, function(done) {
      fileTest.logData(['three.txt','two.txt','one.txt'], function (err, res) {
        assert.ifError(err);
        assert.deepEqual(res, [ '49276d207061636b', '54686520756e616e', '486172616c642053' ]);
        done();
      });
    });
  });
});





// one.txt 486172616c642053
// two.txt 54686520756e616e
// three.txt 49276d207061636b
