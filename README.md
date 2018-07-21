# bit-array

Save memory space by using a BitArray! Behind the scene, the library stores bits within elements of a `Uint8Array` resulting in memory space savings.

```typescript
// ~256 bits in memory + overhead
const jsArray = [1, 0, 0, 1, 1, 0, 0, 0];

// ~8 bits in memory + overhead
const bitArray = new BitArray([1, 0, 0, 1, 1, 0, 0, 0]);
```


- [Size](#size)
- [Installation](#installation)
- [Documentation](#documentation)
- [Release notes](#release-notes)

## Size
2.9 KB

## Installation
**via npm**

`npm install bit-array`

**via yarn**

`yarn add bit-array`

**dev**

`npm install`

`yarn install`

`yarn start`

## Documentation

#### Usage
```typescript
import BitArray from "../lib/bit-array";

const arr = new BitArray([0, 1, 0]);

arr.pushAll([1, 1, 1]);
// 0, 1, 0, 1, 1, 1

arr.push(0);
// 0, 1, 0, 1, 1, 1, 0

arr.atIndex(0);
// 0

arr.atIndexRange(0, 3);
// 0, 1, 0

console.log(arr.size)
// 7
```

#### Methods
Method | Description
--- | --- 
**`pushAll(values: Array<bit>)`** | Pushes a an array of bits onto the array
**`push(value: bit)`** | Pushes a single bit onto the array
**`atIndex(index: number)`** | Gets the bit at a given index.
**`atIndexRange(index: number, count: number)`** | Gets count bits at a given index

#### Properties
Property | Description
--- | --- 
**`size`** | Gets the size of the array

## Release notes
### 1.0.0
Initial release
- `pushAll(values: Array<bit>)`
- `push(value: bit)`
- `atIndex(index: number)`
- `atIndexRange(index: number, count: number)`
- `size`

