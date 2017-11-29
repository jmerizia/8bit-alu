const gates = require('./components');
const gates = require('./output');

console.log(gates.eight_bit.subtractor(
  [0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 1]
))

