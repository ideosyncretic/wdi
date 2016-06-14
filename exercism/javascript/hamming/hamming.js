var Hamming = function () {}

Hamming.prototype.compute = function (strand1, strand2) {
  
  var hammingDistance = 0;
  array1 = strand1.split("")
  array2 = strand2.split("")
  if (array1.length === array2.length) {
    for (i = 0; 1 < array1.length; i++) {
      if (array1[i] !== array2[1]) {
        hammingDistance += 1;
      }
    }
  return hammingDistance;
  }
};

module.exports = Hamming;
