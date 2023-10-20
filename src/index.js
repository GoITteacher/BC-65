/* 
Напишіть функцію яка приймає три параметра min, max та step.Створіть цикл "for", який виводить числа від min до max включно з кроком step.
*/

// debugger;

// function number(min, max, step) {
//   for (let i = min; i <= max; i += step) {
//     console.log(i);
//   }
// }
// number(7, 20, 3);

/*  
Напишіть функцію яка приймає один параметр - массив. Функція повинна виводити суму всіх чисел у цьому масиві.
*/

// function sum(array) {
//   let total = 0;
//   for (let item of array) {
//     total += item;
//   }
//   return total;
// }
// const result = sum([5, 2, 5, 4, 5]);
// console.log(result);

/* 
Напишіть функцію яка приймає масив та повертає кількість непарних чисел у масиві.
 */

// function oddNumbers(array) {
//   let numbers = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       numbers += 1;
//     }
//   }
//   return numbers;
// }

// const result = oddNumbers([2, 1, 3, 5, 2, 6]);
// console.log(result);

/* 
Функція: filterEvenNumbers(originalArray) 
Параметри: originalArray - масив чисел. 
Повертає: Новий масив, який містить лише парні числа з originalArray.
*/

// function filterEvenNumbers(originalArray) {
//   const evenArray = [];
//   debugger;
//   for (const number of originalArray) {
//     const isEven = !(number % 2);
//     if (isEven) {
//       evenArray.push(number);
//     }
//   }
//   return evenArray;
// }
// const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 0]);
// console.log(result);

/* 
Створіть функцію, яка приймає інформацію про користувача та повертає об'єкт, що містить цю інформацію. Користувач складається з таких полів: ім'я (name), вік (age), місто проживання (city) і електронна пошта (email).
*/

/* function createUser(name, age, city, email) {
  const object = {
    name,
    age,
    city,
    email,
  };
  return object;
}

const result = createUser('Volodka', 23, 'Dnipro', 'awdawd@gmail.com');

console.log(result); */

/* 
Створіть функцію, яка приймає об'єкт і повертає кількість властивостей (полів) в цьому об'єкті.
*/

// function countProperties(object) {
//   const keys = Object.keys(object);
//   const count = keys.length;
//   return count;
// }

// let result = countProperties({ x: 12, y: 'adsf' });
// console.log(result);

// const objA = {
//   x: 10,
//   y: 20,
// };

// const objB = {
//   q: 30,
//   t: 40,
//   __proto__: objA,
// };

// for (let key in objB) {
//   console.log(key);
//   if (objB.hasOwnProperty(key)) {
//     console.log('hasOwnProp', key);
//   }
// }

// console.log();

// ========================

/* 
Створіть функцію, яка приймає масив користувачів (кожен користувач - об'єкт з інформацією) та електронну пошту. Функція повинна повертати об'єкт користувача з відповідною електронною поштою або null, якщо користувача не знайдено. */

/* function arrUser(array, email) {
  for (const item of array) {
    if (item.email === email) {
      return item;
    }
  }
  return null;
}



console.log(arrUser(users, 'email1@gmail.com'));
console.log(arrUser(users, 'emai1@gmail.com')); */

/* 
Створіть функцію, яка приймає об'єкт і рядок (ім'я властивості). Функція повинна повертати true, якщо така властивість існує у об'єкті, і false, якщо ні. 
*/
const users = [
  { name: 'name1', email: 'email1@gmail.com' },
  { name: 'name2', email: 'email2@gmail.com', age: 12 },
  { name: 'name3', email: 'email3@gmail.com' },
  { name: 'name4', email: 'email4@gmail.com' },
  { name: 'name5', email: 'email5@gmail.com' },
  { name: 'name6', email: 'email6@gmail.com' },
];

// function hasProperty(object, message) {
//   return object.hasOwnProperty(message);
// }

function hasProperty(object, message) {
  return Object.keys(object).includes(message);
}

console.log(hasProperty(users[1], 'age'));
