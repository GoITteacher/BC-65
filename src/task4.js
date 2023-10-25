function f() {
  const foo = () => {
    function test() {
      //this = obj
      console.log(this);
    }

    const user = {
      show: test, // show = test
    };

    user.show.call(obj);
  };

  return foo;
}

const obj = {
  name: 'obj',
};
let obj1 = {
  name: 123,
  foo1: f.call(obj),
};

obj1.foo1();
