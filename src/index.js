// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// function func() {
//   console.log(this);
// }

// user.func();

// =========================================

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     //this = obj1
//     return () => {
//       //this = obj1
//       console.log(this);
//     };
//   },
// };

// const newFunc = obj1.func();

// newFunc();

// =========================================

const obj1 = {
  name: 'obj1',
  func() {
    function test() {
      console.log(this);
    }
    return test;
  },
};

let obj2 = {
  name: 'obj2',
  func() {
    return () => {
      console.log(this);
    };
  },
};

const newFunc2 = obj1.func.bind(obj2);
newFunc2().call(obj2);
// =========================================

// 1 - arrow function
// 2 - bind
// 3 - call apply
// 4 - object
// 5 - window/undefined

//===
