// let user1 = {
//   name: 'Petya',
//   setName: function (name) {
//     this.name = name;
//   },
// };

// let user2 = {
//   name: '1231',
//   age: 'TEST',
// };

// let newName = user1.setName.bind(user2); // this = user2

// newName('name1');
// newName('1231');

// console.log(user1);
// console.log(user2);

// ==================

// const user1 = {
//   drive() {
//     console.log('Ku-KU', this);
//   },
// };

// const user2 = {
//   name: 'Vasya',
//   drive: user1.drive,
// };

// const drive = user1.drive.bind(user2);
// drive();
