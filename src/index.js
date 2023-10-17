//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatString(n, s) {
//   let res = '';
//   for (let i = 1; i <= n; i++) {
//     res += s;
//   }
//   return res;
// }

// function repeatsStr(n, s) {
//   return s.repeat(n);
// }

// ======================

/* 
Given a two dimensional array, return the co-ordinates of x.

If x is not inside the array, or if x appears multiple times, return [].

The co-ordinates should be zero indexed in row-major order.
You should assume you will always get an array as input. The array will only contain 'x's and 'o's.
*/

// const myArr = [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
// ];

// function findX(array) {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const x = array[i].indexOf('x');
//     const y = i;

//     if (x !== -1) {
//       result.push(y, x);
//     }

//     if (result.length > 2) {
//       return [];
//     }
//   }
//   return result;
// }

// console.log(findX(myArr));

// ===================================

/* 
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored. 
*/

//parse("iiisdoso") => [ 8, 64 ]

// 64
// [8, 64]

/* function deadFish(string) {
  const array = [];
  let value = 0;

  for (const item of string) {
    switch (item) {
      case 'i':
        value += 1;
        break;
      case 'd':
        value -= 1;
        break;
      case 's':
        value **= 2;
        break;
      case 'o':
        array.push(value);
        break;
    }
  }

  return array;
} */

// =====

/* Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in: */

// =====================
// function steps(n) {
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     res.push(' '.repeat(i) + 'I');
//   }
//   return res.join('\n');
// }

// console.log(steps(5));

// ======================

/* function createRectangle(width, height) {
  let str = '';

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const isFirstRow = y == 0;
      const isLastRow = y == height - 1;
      const isFirstCol = x == 0;
      const isLastCol = x == width - 1;

      const isBorder = isFirstRow || isLastRow || isFirstCol || isLastCol;

      const isMainDiagonal = x == y;

      const isAcross = x % 2 == 0 || y % 2 == 0;

      if (isBorder || isAcross || isMainDiagonal) str += '*';
      else str += ' ';
    }
    str += '\n';
  }

  console.log(str);
}

createRectangle(9, 9); */

// ===============================

// const key = ;
// 'key';

// console.log(key);
// console.log('key')

// const obj = {
//     name: '123'
// }
