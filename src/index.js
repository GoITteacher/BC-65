// Виведіть на екран загальну кількість яблук і винограду.
//  Різницю яблук і винограду.

/* const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = apples - grapes;
console.log(diff);
console.log(total * diff); */

// Замініть вираз переозначення комбінованим оператором `+=`.

/* let cars = 100;
cars += 50;
console.log(cars); */

///
// Розгляньте пріоритет операторів у інструкції присвоєння значення змінній
// `result`.

// let result = 18;
// result += (10 + 22 - 2) * 5;
// console.log(result);

//
/* 

Напишіть скрипт, який виводить в консоль округлені вверх/вниз і т.д. значення
змінної `value`. Використовуйте методи `Math.floor()`, `Math.ceil()` і
`Math.round()`. Перевірте, що буде в консолі при значеннях `27.3` і `27.9`. 
*/

/* const value = 27.9;

const x1 = Math.floor(value);
const x2 = Math.ceil(value);
const x3 = Math.round(value);
console.log(x1, x2, x3); */
// =============================

// Складіть фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

/* const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;

const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;

console.log(message); // "Cyberdyne Systems has 200 bots in stock" */

// ===================
/* Напишіть скрипт, який розраховує індекс маси тіла людини. Для цього необхідно поділити вагу в кілограмах на квадрат зросту людини в метрах.

Вага і зріст зберігаються в змінних weight і height, але не як числа, а в вигляді рядків (спеціально для задачі). Нецілі числа можуть бути вказані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

Індекс маси тіла необхідно округлити до однієї цифри після коми; */

// let weight = '88.3';
// let height = '1.75';

// weight = parseFloat(weight.replace(',', '.'));
// height = +height.replace(',', '.');
// // height = Number(height.replace(',', '.'));
// console.log(weight, height);
// const bmi = +(weight / height ** 2).toFixed(1);

// console.log(bmi); // 28.8

// =========

// console.log(5 > 4); // t

// console.log(10 >= '7'); // t

// console.log('215' > '213'); // t

// console.log('2' < '12'); // f

// console.log('4' == 4); // t

//=======

/* console.log('6' === 6); // f

console.log('false' === false); // f

console.log(1 == true); // t

console.log(1 === true); // f

console.log(0 == false); // t

console.log('0' === false); // f */

//=======

// console.log('Papaya' < 'papaya'); // t

// console.log('Papaya' === 'papaya'); // f

// console.log(undefined == null); // t

// console.log(undefined === null); // f
// ==========

// console.log(true && 3); // 3

// console.log(false && 3); // f

// console.log(true && 4 && 'kiwi'); // k

// console.log(true && 0 && false); // 0
// =================

// console.log(true || 3); // t

// console.log(true || 3 || 4); // t

// console.log(true || false || 7); // t

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // f

// console.log(null || (2 && 3) || 4); //3

// ===========================

// console.log(1 && 5); // 5
// console.log(5 && 1); // 1
// console.log(0 && 2); // 0
// console.log(2 && 0); // 0
// console.log('' && 'Mango'); // ''
// console.log('Mango' && ''); // ''
// console.log('Mango' && 'Poly'); // P
// console.log('Poly' && 'Mango'); // M

// ===========================

// console.log(true || false); //t
// console.log(false || true); // t
// console.log(true || true); // t

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // t

// =======================

// console.log(!true); // f
// console.log(!false); // t
// console.log(!3); // f
// console.log(!'Mango'); // f
// console.log(!0); // t
// console.log(!''); // t

// const isOnline = true;
// const isOffline = !isOnline;

// ============================

const test = (true && false) || false || ((true || (false && true)) && false);

// 0 + 0 + 0 = 0;

console.log(test);
