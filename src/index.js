// Приклад 1 - Введення користувача та умови
// Використовуючи конструкцію if..else і prompt, напишіть код, який буде запитувати: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуйте повідомлення "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const userInput = prompt('Яка офіційна назва JavaScript?');
// const officialName = 'ecmascript';
// const isEqual = userInput.toLowerCase() === officialName.toLowerCase();

// if (isEqual) {
//   console.log('Правильно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

// =======
// Напишіть скрипт для відображення годин і хвилин у консолі браузера у вигляді рядка формату "14 год. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводьте рядок "14 год.", без хвилин.

// const hours = 14;
// const minutes = 25;
// let timestring = `${hours} год. ${minutes ? minutes + ' хв.' : ''}`;

// console.log(timestring);

// ============

// Напишіть скрипт, який виводить в консоль рядок "Це додатнє число", якщо в prompt користувач ввів число більше нуля. Якщо введено було нуль, виводьте у консолі рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".

// const userInput = +prompt('Введіть число') || 0;
// if (userInput === 0) {
//   console.log(`Це нуль`);
// } else if (userInput < 0) {
//   console.log(`Це від'ємне число`);
// } else {
//   console.log(`Це додатне число`);
// }

// =======================

// Напишіть скрипт, який порівнює числа в змінних a і b. Якщо обидва значення більше 100, то виведіть в консоль максимальне з них. В іншому випадку в консолі повинно бути сума значення b та числа 512.

// const a = 180;
// const b = 120;
// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }

// =====================

// Напишіть цикл for, який виводить в консоль браузера числа у зростаючому порядку від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }
// 5 % 5 = 5 - (5 * 1) = 0;
// 6 % 5 = 6 - (5 * 1) = 1;
// 7 % 5 = 6 - (5 * 1) = 2;
// 8 % 5 = 6 - (5 * 1) = 3;
// 9 % 5 = 6 - (5 * 1) = 4;
// 10 % 5 = 6 - (5 * 1) = 0;
// 11 % 5 = 6 - (5 * 1) = 1;
// 12 % 5 = 6 - (5 * 1) = 2;
// 13 % 5 = 6 - (5 * 1) = 3;
// 14 % 5 = 6 - (5 * 1) = 4;
// 15 % 5 = 6 - (5 * 1) = 0;

// =====================

const min = 0;
const max = 10;

// 0 1 2 3 4 5 6 7 8 9 10
// 55 / 11 = 5;

// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   total += i / (max - min + 1);
// }

// console.log(total);
// ====================

let x = 'helle';
// const y = x.split('').reverse().join('');
// console.log(x === y);

x = x.toLowerCase();
for (let i = 0; i < Math.floor(x.length / 2); i++) {
  const left = i;
  const right = x.length - i - 1;

  const leftSymbol = x[left];
  const rightSymbol = x[right];
  if (leftSymbol !== rightSymbol) {
    console.log('Isnt polindrom');
    break;
  }
}
