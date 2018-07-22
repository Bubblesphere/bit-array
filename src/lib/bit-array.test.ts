import BitArray, { bit } from "./bit-array";

test('Passing less than 8 bit to the constructor', () => {
  const arr1 = [1];
  const arr2 = [1, 0];
  const arr3 = [1, 0, 1];
  const arr4 = [1, 0, 1, 0];
  const arr5 = [1, 0, 1, 0, 1];
  const arr6 = [1, 0, 1, 0, 1, 0];
  const arr7 = [1, 0, 1, 0, 1, 0, 1];

  const bArr1 = new BitArray(arr1 as Array<bit>);
  const bArr2 = new BitArray(arr2 as Array<bit>);
  const bArr3 = new BitArray(arr3 as Array<bit>);
  const bArr4 = new BitArray(arr4 as Array<bit>);
  const bArr5 = new BitArray(arr5 as Array<bit>);
  const bArr6 = new BitArray(arr6 as Array<bit>);
  const bArr7 = new BitArray(arr7 as Array<bit>);

  expect(bArr1.atIndexRange(0)).toEqual(arr1);
  expect(bArr2.atIndexRange(0)).toEqual(arr2);
  expect(bArr3.atIndexRange(0)).toEqual(arr3);
  expect(bArr4.atIndexRange(0)).toEqual(arr4);
  expect(bArr5.atIndexRange(0)).toEqual(arr5);
  expect(bArr6.atIndexRange(0)).toEqual(arr6);
  expect(bArr7.atIndexRange(0)).toEqual(arr7);
});

test('Passing more than 8 bit to the constructor', () => {
  const arr8 = [1, 0, 1, 0, 1, 0, 1, 0];
  const arr9 = [1, 0, 1, 0, 1, 0, 1, 0, 1];

  const bArr8 = new BitArray(arr8 as Array<bit>);
  const bArr9 = new BitArray(arr9 as Array<bit>);

  expect(bArr8.atIndexRange(0)).toEqual(arr8);
  expect(bArr9.atIndexRange(0)).toEqual(arr9);
});

test('Can get a specific index correctly', () => {
  const bArr1 = new BitArray([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const bArr2 = new BitArray([1, 1, 1, 1, 1, 1, 1, 1, 1]);

  for (let i = 0; i < bArr1.size; i++) {
    expect(bArr1.atIndex(i)).toBe(0);
    expect(bArr2.atIndex(i)).toBe(1);
  }
});

test('Can\'t get an invalid index', () => {
  const bArr1 = new BitArray([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  expect(() => bArr1.atIndex(-1)).toThrowError();
  expect(() => bArr1.atIndex(bArr1.size + 1)).toThrowError();
});

test('Can\'t get an invalid index range', () => {
  const bArr1 = new BitArray([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  expect(() => bArr1.atIndexRange(-1)).toThrowError();
  expect(() => bArr1.atIndexRange(0, bArr1.size + 1)).toThrowError();
});

test('Can get a specific index range correctly', () => {
  const arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const arr2 = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  const bArr1 = new BitArray(arr1 as Array<bit>);
  const bArr2 = new BitArray(arr2 as Array<bit>);

  expect(bArr1.atIndexRange(0)).toEqual(arr1);
  expect(bArr2.atIndexRange(0)).toEqual(arr2);

  expect(bArr1.atIndexRange(1)).toEqual(arr1.slice(1));
  expect(bArr2.atIndexRange(1)).toEqual(arr2.slice(1));

  expect(bArr1.atIndexRange(0, 2)).toEqual(arr1.slice(0, 2));
  expect(bArr2.atIndexRange(0, 2)).toEqual(arr2.slice(0, 2));

  expect(bArr1.atIndexRange(1, 5)).toEqual(arr1.slice(1, 6));
  expect(bArr2.atIndexRange(1, 5)).toEqual(arr2.slice(1, 6));
});

test('Can push 0 values onto BitArray', () => {
  const bArr1 = new BitArray([]);

  for (let i = 0; i < 100; i++) {
    bArr1.push(1);
    expect(bArr1.atIndex(i)).toBe(1);
  }
});

test('Can push 1 values onto BitArray', () => {
  const bArr1 = new BitArray([]);

  for (let i = 0; i < 100; i++) {
    bArr1.push(0);
    expect(bArr1.atIndex(i)).toBe(0);
  }
  bArr1[0] = 1;
});

test('Can set values', () => {
  const bArr1 = new BitArray([1, 0]);

  bArr1.set(0, 1);
  expect(bArr1.atIndexRange(0)).toEqual([1, 0]);
  bArr1.set(0, 0);
  expect(bArr1.atIndexRange(0)).toEqual([0, 0]);
  bArr1.set(1, 0);
  expect(bArr1.atIndexRange(0)).toEqual([0, 0]);
  bArr1.set(1, 1);
  expect(bArr1.atIndexRange(0)).toEqual([0, 1]);
});

test('Can\'t set values for invalid index', () => {
  const bArr1 = new BitArray([1, 0]);

  expect(() => bArr1.set(-1, 0)).toThrowError();
  expect(() => bArr1.set(bArr1.size + 1, 0)).toThrowError();
});

test('Size is valid', () => {
  const bArr1 = new BitArray([1, 0]);
  expect(bArr1.size).toBe(2);

  bArr1.pushAll([1, 1]);
  expect(bArr1.size).toBe(4);

  bArr1.push(1);
  expect(bArr1.size).toBe(5);
});