/* 
Задача: Підрахунок суми чисел в масиві. Напишіть функцію sumArray, яка приймає масив чисел та callback-функцію. Функція sumArray повинна обчислити суму чисел у масиві та передати результат у callback-функцію.
*/

/* function sumArray(arr, callback) {
  let total = 0;
  for (const elem of arr) {
    total += elem;
  }
  callback(total);
}

function pow2(value) {
  console.log(value ** 2);
}
function pow4(value) {
  console.log(value ** 4);
}
function pow6(value) {
  console.log(value ** 6);
}

sumArray([1, 2, 3, 4, 5], pow2);
sumArray([1, 2, 3, 4, 5], pow4);
sumArray([1, 2, 3, 4, 5], pow6);
sumArray([1, 2, 3, 4, 5], console.log); */

// ====================

/* 
Задача: Перетворення кожного елемента масиву. Створіть функцію transformArray, яка приймає масив та callback-функцію. Функція transformArray повинна викликати callback-функцію для кожного елемента масиву та створити новий масив з результатами. 
*/

/* 
function transformArray(array, callback) {
  const newArray = [];
  for (const item of array) {
    let newItem = callback(item);
    newArray.push(newItem);
  }
  return newArray;
}

function intToString(num) {
  return num.toString();
}

const res = transformArray([1, 2, 3, 4, 5, 6, 7, 8, 9], numPow);
console.log(res);

function numPow(num) {
  if (num % 2 == 0) {
    return num * -1;NaN
  }
  return num; 
} */

/* 
Задача: Пошук об'єкта в масиві. Напишіть функцію findObject, яка приймає масив об'єктів та callback-функцію. Функція findObject повинна перевірити кожен об'єкт у масиві за допомогою callback-функції і повернути перший об'єкт, який задовольняє умову.
*/

// function findObject(arr, callback) {
//   for (const item of arr) {
//     if (callback(item)) {
//       return item;
//     }
//   }
// }

// const arr = [10, 20, 30, 40, 50, 60];

// function checkNumber(num) {
//   return num > 0;
// }

// const res = findObject(arr, checkNumber);
// console.log(res);

// const users = [
//   { name: 'Jonh', age: 17 },
//   { name: 'Jack', age: 18 },
//   { name: 'Tom', age: 22 },
// ];
// function findUser(obj) {
//   return obj.age > 18;
// }

// const res = findObject(users, findUser);

// console.log(res);

// ===========================
/* 

Задача: Виведення повідомлення з використанням callback. Напишіть функцію printMessage, яка приймає рядок та callback-функцію. Функція printMessage повинна вивести переданий рядок та викликати callback-функцію після виведення. 
*/

// function printMessage(str, callback) {
//   console.log(str);
//   callback();
// }

/* 
Задача: Підрахунок суми чисел у масиві. Напишіть функцію, яка приймає масив чисел та використовує цикл forEach для підрахунку їхньої суми.
*/

/* function sumArray(array) {
  let total = 0;

  array.forEach((el, ind, arr) => {
    total += el;
  });

  return total;
}
const result = sumArray([1, 2, 3, 4, 5]); */

// =============================

/* 
Виведення елементів масиву. Створіть функцію, яка приймає масив та використовує цикл forEach для виведення кожного елемента масиву в консоль.
*/

// function showElements(array) {
//   array.forEach((elem, idx, arr) => {
//     console.log(`${idx} - ${elem}`);
//   });
// }

// showElements([10, 502, 3, 1, 3, 5, 6, 2, 4, 5, 6]);

// ===============================

/* Перетворення елементів масиву. Напишіть функцію, яка приймає масив та використовує цикл forEach для зміни кожного елемента масиву та створення нового масиву зі зміненими значеннями. */

/* function toUpperCase(array) {
  array.forEach((elem, indx) => {
    array[indx] = elem.toUpperCase();
  });

  console.log(array);
}

toUpperCase(['hawd', 'sef', 'srf', 'dthdt']); */

// let myName = 'Volodymyr';

// let newName = myName.toUpperCase();

// console.log(myName);
// console.log(newName);

// =====================

/* 
Видалення елементів із масиву. Створіть функцію, яка приймає масив та використовує цикл forEach для видалення певних елементів із масиву на основі умови.


*/

// function filterArr(arr, callback) {
//   const filteredArr = [];
//   arr.forEach((elem, index) => {
//     if (callback(elem)) {
//       filteredArr.push(elem);
//     }
//   });
//   console.log(filteredArr);
// }
// filterArr([12, 8, -15, 4, 8], el => el < 0);

// filterArr([12, 8, -15, 4, 8], el => {
//   return el > 10;
// });

// ============================

/* 
Пошук об'єкта в масиві за властивістю. Напишіть функцію, яка приймає масив об'єктів та використовує цикл forEach для пошуку об'єкта за певною властивістю name. Властивість name повинна містити літеру "A"
*/
function findProps(arr) {
  let myObject = null; // Anton

  arr.forEach((value, idx, arr) => {
    if (!myObject && value.name.includes(`A`)) {
      myObject = value;
    }
  });

  console.log(myObject);
}

const users = [
  { name: 'Anton' },
  { name: 'Andriy' },
  { name: 'Anna' },
  { name: 'Asya' },
  { name: 'Alla' },
  { name: 'Amina' },
];

findProps(users);

const arr = [];
arr.splice();
