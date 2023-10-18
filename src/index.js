/* 
Створіть об'єкт, який представляє собою інформацію про вашого улюбленого героя з фільму, включаючи ім'я, рік виходу фільму та короткий опис. Виведіть цю інформацію на консоль.
*/
// const myFavHero = {
//   name: 'FakeName',
//   year: 0,
//   descr: '123',

//   showObj() {
//     console.log(
//       `name - ${this.name}\nyear - ${this.year}\ndescr - ${this.descr}`,
//     );
//   },
// };
// myFavHero.showObj();

// ==========

/* 
Створіть об'єкт, який представляє ваш смартфон. Включіть властивості, такі як "модель" і "рік випуску". Потім змініть модель вашого смартфону та виведіть оновлену інформацію на консоль.
*/
// const smartPhone = {
//   model: 'iPhone-15',
//   years: 2022,
//   owner: { name: 'Evhen', age: 38 },
// };

// // smartPhone.years = 2023;
// smartPhone['years'] = 2023;
// smartPhone.owner.age = 37;
// smartPhone['owner']['age'] = 37;
// console.log(smartPhone);

// ========================

/* 
 Створіть об'єкт, що представляє меню ресторану, де ключами будуть назви страв, а значеннями - їх вартість. Використовуючи цикл for...in, виведіть всі страви та їх ціни на консоль.
 */

// const menu = {
//   beer: 100,
//   uzvar: 50,
//   sexOnBeach: 150,
//   showItems() {
//     for (const key in this) {
//       if (Object.hasOwnProperty.call(this, key)) {
//         console.log(key, this[key]);
//       }
//     }
//   },
// };
// menu.showItems();

// ======================

/* Створіть об'єкт, який представляє ваше робоче місце. Додайте до нього різні властивості, такі як "назва компанії", "посада" і "рік прийому на роботу". Створіть ще один об'єкт, який буде представляти вас, з властивостями "ім'я" та "вік". Додайте цей об'єкт до об'єкту вашого робочого місця як властивість. Виведіть всю цю інформацію на консоль. */

// const myWorkPlace = {
//   company: 'google',
//   position: 'developer',
//   year: 2023,
// };

// const me = {
//   name: 'Daryna',
//   age: 26,
// };

// myWorkPlace.person = me;
// console.log(myWorkPlace);
// me.age = 25;
// console.log(myWorkPlace);

// =================

// const myFavHero = {
//   name: 'FakeName',
//   year: 0,
//   descr: '123',

//   showObj() {
//     console.log(
//       `name - ${this.name}\nyear - ${this.year}\ndescr - ${this.descr}`,
//     );
//   },
// };

/* Відредагуйте об'єкт, створений у завданні №1, і видаліть одну з його властивостей. Потім виведіть оновлену інформацію на консоль. */

// delete myFavHero.descr;
// console.log(myFavHero);

// const arr = [1, 2, 3];
// delete arr[1];
// console.log(arr[1]);

// =================

/* Створіть масив, який містить об'єкти, що представляють різних людей. Кожен об'єкт має властивості, такі як "ім'я", "вік" та "місто". Виведіть інформацію про кожну людину на консоль, використовуючи цикл for або forEach. */

// const users = [
//   {
//     name: `Dima`,
//     age: 26,
//     city: `Kiev`,
//   },
//   {
//     name: `Ruslan`,
//     age: 23,
//     city: `Dnipro`,
//   },
//   {
//     name: `Vitaliy`,
//     age: 27,
//     city: `Lviv`,
//   },
// ];

// for (const user of users) {
//   if (user.age > 25) {
//     console.log(user);
//   }
// }

// ===================
/* Створіть масив об'єктів, які представляють студентів. Кожен об'єкт має властивості, такі як "ім'я", "вік" і "середній бал". Використовуючи методи масиву, створіть новий масив, який містить тільки студентів,агякі мають середній бал більше або рівний 4.0. */

// const students = [
//   { name: 'Alice', age: 20, gpa: 3.5 },
//   { name: 'Bob', age: 22, gpa: 4.2 },
//   { name: 'Charlie', age: 21, gpa: 3.9 },
//   { name: 'David', age: 19, gpa: 4.5 },
// ];
// function filter(students, gpa) {
//   const goodStudenst = [];
//   for (const student of students) {
//     if (student.gpa >= gpa) {
//       goodStudenst.push(student);
//     }
//   }
//   return goodStudenst;
// }
// console.log(filter(students, 4));

// ========================

const toDoList = {
  tasks: [],

  createTask(title, description, status, deadline) {
    const task = {
      id: this.tasks.length,
      title,
      description,
      status,
      deadline,
    };
    this.tasks.push(task);
  },
  removeTask(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id === this.tasks[i].id) {
        this.tasks.splice(i, 1);
      }
    }
  },
  updateTask(id, key, value) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (id === this.tasks[i].id) {
        this.tasks[i][key] = value;
      }
    }
  },
};

// id, title, description, status, deadline

toDoList.createTask('Title 1', 'Desc 1', 'isActive', '12.12.2023');
toDoList.createTask('Title 2', 'Desc 2', 'isActive', '12.12.2023');
toDoList.createTask('Title 3', 'Desc 1', 'isActive', '12.12.2023');
toDoList.createTask('Title 4', 'Desc 2', 'isActive', '12.12.2023');

toDoList.updateTask(2, 'status', 'Done');
console.log(toDoList.tasks);
