
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  const juntaTudo = (previousValue, nextValue) => previousValue.concat(nextValue); // ~> concatenar arrays
  return arrays.reduce(juntaTudo, []);
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);