const assert = require('assert');

const myList = [1, 2, 3];

const swap = list => list.reverse(); 

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);