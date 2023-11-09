const amount = 10;
const delay = 1000;
const step = 200;

for (let i = 0; i < amount; i++) {
  const myDelay = delay + i * step;
  const promise = createPromise(myDelay, myDelay, true);
  promise.then(res => {
    console.log(res);
  });
}

function createPromise(value, delay, isOk) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
}
