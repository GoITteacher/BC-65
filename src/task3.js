// let elem = {
//   value: 'Привіт',
// };

// function func(surname, name) {
//   let obj1 = {
//     foo() {
//       console.log(this);
//     },
//   };

//   return obj1.foo;
// }

// const myFunc = func.apply(elem, ['Vasya', 'Vasya1']);
// myFunc.apply(elem);

// ===========

// function boltCar(x, y) {
//   console.log('Start');
//   console.log(this);
//   console.log('End');
//   function test() {}
//   return test;
// }

// const min = 10;
// const max = 20;

// const arr = [10, 20];

// boltCar.call(user1, min, max);
// boltCar.apply(user1, [min,max]);

const user1 = {
  name: 'user1',
};

const user2 = {
  name: 'user2',
};

const user3 = {
  name: 'user3',
};

function foo() {
  console.log(this);
}

foo.bind(user1).call(user3);
