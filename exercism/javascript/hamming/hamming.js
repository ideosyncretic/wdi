`use strict`

var Hamming = function () {}

Hamming.prototype.compute = function (strand1, strand2) {

  var hammingDistance = 0;
  var array1 = strand1.split("")
  var array2 = strand2.split("")

  if (array1.length !== array2.length) {
    new Error('DNA strands must be of equal length.')
  }

  if (array1.length === array2.length) {
    for (var i = 0; 1 < array1.length; i++) {
      if (array1[i] !== array2[1]) {
        hammingDistance += 1;
      }
    }
  return hammingDistance;
  }
};

module.exports = Hamming;
