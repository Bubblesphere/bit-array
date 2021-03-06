import BitArray from "../lib/bit-array";

const arr = new BitArray([0, 1, 0]);

arr.pushAll([1, 1, 1]);
console.log(arr.atIndexRange(0));
// 0, 1, 0, 1, 1, 1

arr.push(0);
console.log(arr.atIndexRange(0));
// 0, 1, 0, 1, 1, 1, 0

arr.set(0, 1);
console.log(arr.atIndexRange(0));
// 1, 1, 0, 1, 1, 1, 0

arr.atIndex(0);
console.log(arr.atIndex(0));
// 1

arr.atIndexRange(0, 3);
console.log(arr.atIndexRange(0, 3));
// 1, 1, 0

console.log(arr.size)
// 7
