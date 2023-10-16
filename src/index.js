/* 
["Eyes", "Glasses", "Monocles", "Telescopes"]
*/
/* const arr = ['Telescopes', 'Glasses', 'Eyes', 'Monocles'];

for (let i = 0; i < arr.length - 1; i += 1) {
  for (let j = i + 1; j < arr.length; j += 1) {
    if (arr[i].length > arr[j].length) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
}

console.log(arr); */

//==========================

// const arr = [5, 2, 4, 7, 1, 2, 3, 1, 6, 2];
// splice
// index min
// 1 - for

/* let min = Infinity;
for (let i = 0; i < arr.length; i += 1) {
  if (min >= arr[i]) {
    min = arr[i];
  }
}
let minIndex = arr.indexOf(min);
arr.splice(minIndex, 1);
console.log(arr); */

/* let indexMin = 0;
for (let i = 0; i < arr.length; i += 1) {
  if (arr[indexMin] >= arr[i]) {
    indexMin = i;
  }
} */

//==========================

/* const min = 4;
const max = 26;
let count = 0;

let arr = [];

for (let i = min; i <= max; i++) {
  if (!i.toString().includes('5')) {
    count++;
    arr.push(i);
  }
}

console.log(arr);
console.log(count); */

//===============================

const arr = [1, 2, 3, 4, 5, 6, 78, 9];

for (let i = 0; i < arr.length / 2; i++) {
  const left = i;
  const right = arr.length - 1 - i;

  const tmp = arr[left];
  arr[left] = arr[right];
  arr[right] = tmp;
}

// for (const item of arr) {
//   copyArr.unshift(item);
// }

console.log(arr);
