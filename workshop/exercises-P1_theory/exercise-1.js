// Given the following functions, answer the questions below.

const square = (x) => {
  return x * x;
};

const decrement = (x) => {
  return x - 1;
};

const duplicateString = (x) => {
  return x.concat(x);
};

const reverseString = (str) => {
  const splitString = str.split(''); // var splitString = "hello".split("");
  const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  return reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
};

// Expand each of the following and get the result of the expression
// 1-1
console.log(square(decrement(square(decrement(3)))));
// 1. decrement() is called. Returns 2
// 2. square() is called. Returns 4
// 3. decrement() is called. Returns 3
// 2. square() is called. Returns 9

// 1-2
console.log(decrement(decrement(square(square(3)))));
// 1. square() is called. Returns 9
// 2. square() is called. Returns 81
// 3. decrement() is called. Returns 80
// 2. decrement() is called. Returns 79

// 1-3
console.log(duplicateString(reverseString('hello')));
// 1. reverseString() is called. Returns 'olleh'
// 2. duplicateString() is called. Returns 'olleholleh'

// 1-4
console.log(reverseString(duplicateString(duplicateString('foo'))));
// 1. duplicateString() is called. Returns 'foofoo'
// 2. duplicateString() is called. Returns 'foofoofoofoo'
// 2. reverseString() is called. Returns 'oofoofoofoof'

