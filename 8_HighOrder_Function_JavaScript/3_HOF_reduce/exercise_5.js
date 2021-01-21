
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];



function containsA() {
  const verifyAa = ((acc, curr) => curr === 'a' || curr === 'A' ? acc + 1 : acc);
  return names.reduce((acc, curr) => acc + curr.split('').reduce(verifyAa, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);