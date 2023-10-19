// const person = { name: 'John', age: 30, city: 'New York' };
// Використовуючи деструктуризацію, витягніть ім'я та вік об'єкта person.

// const { name, age } = person;
// console.log(name, age);

// ================================

// const numbers = [1, 2, 3, 4, 5];

// Створіть новий масив, використовуючи спред оператор, який містить всі числа з масиву numbers, а також додайте число 6 в кінець нового масиву.
// const array = [0, ...numbers, 6];
// console.log(array);

// alert();

// ================================

// const team = [undefined, 'Bob', 'Charlie', 'David', 'Eve'];

// розділіть масив team на два окремих масиви: "captain" (перший елемент) та "players" (решта елементів).

// const captain = ['Alice'];
// const players = ['Bob', 'Charlie', 'David', 'Eve']

// const [cap = 'default', ...players] = team;
// console.log(cap, players);

// ========================

// const book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   year: 1925,
//   isOld: true,
//   store: ['x1', 'x2', 'x3', 'x4'],
// };
// const {
//   title,
//   author,
//   year,
//   isOld = true,
//   store: [, , y],
// } = book;
// console.log(title, author, year, isOld, y);
// Використовуючи деструктуризацію, створіть змінні title, author та year, які міститимуть відповідні значення з об'єкта book.

// ==================================

// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 300 },
// ];

// Витягніть імена продуктів (name) з масиву products за допомогою деструктуризації та збережіть їх у окремому масиві.

// const names = [];

// for (i = 0; i < products.length; i += 1) {
//   const { name } = products[i];
//   names.push(name);
// }

// for (const product of products) {
//   const { name } = product;
//   names.push(name);
// }

// console.log(names);

// ==================================

// const person = { name: 'Alice', age: 25, country: 'USA' };

// Створіть новий об'єкт, використовуючи спред оператор, який містить всі властивості з об'єкта person, крім "country". Також створіть окрему змінну "country", в якій збережіть значення "country" з об'єкта person за допомогою рест оператора.

// const { country, ...newObj } = person;
// console.log(country, newObj);
// ===================================
// function getUserInfo({ name, age, country }) {
//   return `Ім'я: ${name}, Вік: ${age}, Країна: ${country}`;
// }

// const user = { name: 'Bob', age: 30, country: 'Canada' };

// Використовуючи деструктуризацію в параметрах функції getUserInfo, виведіть інформацію про користувача з об'єкта user.

// getUserInfo(user);
// ==================================

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// Створіть два окремих масиви: "firstThree" та "restOfNumbers" за допомогою спред і рест операторів. "firstThree" має містити перші три числа, а "restOfNumbers" - решту чисел з масиву numbers.

// const [first, second, third, ...rest] = numbers;
// const elem = [first, second, third];

// console.log(rest, elem);

// Math.max(...numbers)
// Math.min(...numbers)

// ==================================

// const user = {
//   name: 'Alex',
//   info: {
//     age: 30,
//     country: 'UK',
//   },
//   hobbies: ['reading', 'hiking', 'painting'],
// };

// Використовуючи деструктуризацію, отримайте значення ім'ї, віку та другого хобі користувача.

// const {
//   name,
//   info: { age },
//   hobbies: [, hobby],
// } = user;

// console.log(name, age, hobby);

// =======================

const students = [
  { name: 'Anna', grade: 85 },
  { name: 'Ben', grade: 92 },
  { name: 'Chris', grade: 78 },
];

// Додайте нового студента в масив students, використовуючи спред оператор.
const newStudent = { name: 'Oleg', grade: 80 };
const newArray = [newStudent, ...students, newStudent];
console.log(newArray);
