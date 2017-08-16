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
    it ('should return an array with the first 8 characters of each file in the argument array in correct order', function(done) {
      fileTest.logData(['one.txt','two.txt','three.txt'], function (err, res) {
        assert.ifError(err);
        assert.equal(res, ['48 61 72 61 6c 64 20 53','54 68 65 20 75 6e 61 6e','49 27 6d 20 70 61 63 6b']);
        done();
      });
      fileTest.logData(['three.txt','two.txt','one.txt'], function (err, res) {
        assert.ifError(err);
        assert.equal(res, ['49 27 6d 20 70 61 63 6b','54 68 65 20 75 6e 61 6e','48 61 72 61 6c 64 20 53']);
        done();
      });
    });
  });
});

// one.txt 486172616c642053
// two.txt 54686520756e616e
// three.txt 49276d207061636b
