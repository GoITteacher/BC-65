const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
    year: 2022,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
    year: 2022,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
    year: 2022,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'sport',
    amount: 11,
    price: 27110,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'sport',
    amount: 6,
    price: 31660,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
    year: 2022,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
    year: 2022,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
    year: 2022,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'sport',
    amount: 11,
    price: 27110,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'sport',
    amount: 6,
    price: 31660,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
    year: 2022,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
    year: 2022,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
    year: 2022,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'sport',
    amount: 11,
    price: 27110,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'sport',
    amount: 6,
    price: 31660,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
    year: 2022,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
    year: 2022,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
    year: 2000,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
    year: 2022,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'sport',
    amount: 11,
    price: 27110,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
    year: 2000,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'sport',
    amount: 6,
    price: 31660,
    onSale: false,
    year: 2000,
  },
];

/* 
  {
      make: 'Ford',
      model: 'Explorer',
      type: 'suv',
      amount: 6,
      price: 31660,
      onSale: false,
      year: 2000,
    },
  */

/* 
    Найти автомобили дороже 5000
    Найти авто зеленого цвета
    Найти все спорткары
    */

// const task1 = (cars, min = 5000) => cars.filter(({ price }) => price > min);
// console.table(task1(cars, 25000));
/* 
const task2 = (cars, type) =>
  cars.filter(car => {
    return car.type === type;
  });
console.table(task2(cars, 'sedan')); */

// const task3 = cars =>
//   cars.filter(car => {
//     return car.type === 'sport';
//   });
// console.log(task3(cars));

//Посчитать количество авто 2022 года

// const task4 = cars =>
//   cars.filter(car => {
//     return car.year === 2022;
//   }).length;
// console.log(task4(cars));

// =====================

// const result = cars.reduce((acc, elem, idx, arr) => {
//   if (elem.year === 2022) {
//     acc += elem.amount;
//   }
//   return acc;
// }, 0);

// console.log(result);

// Отсортировать машины по году выпуска (от самого старого до самого нового).
// Найти самую дорогую машину.

// let counter = 0;
// const result = cars =>
//   cars.sort((left, right) => {
//     console.log(counter++);
//     return left.price - right.price;
//   });
// console.table(result(cars));

// const task6 = cars => {
//   const price = cars.map(el => el.price);
//   const maxPrice = Math.max(...price);
//   const maxCar = cars.find(car => car.price === maxPrice);
//   return maxCar;
// };

// ===================
// Найти все машины заданной марки (например, Toyota).

// Посчитать общее количество машин всех типов.

// const task7 = () =>
//   cars.filter(car => {
//     return car.make === 'Toyota';
//   });
// console.log(task7());
// const task8 = () => cars.reduce((acc, el) => acc + el.price * el.amount, 0);

// console.log(task8());

// ==========
// Найти все машины с ценой выше 50000 и отсортировать их по году выпуска от новых к старым.

// Проверить, все ли машины на складе доступны для продажи

// const task8 = cars => {
//   return cars
//     .filter(car => car.price > 5000)
//     .sort((a, b) => {
//       return a.year - b.year;
//     });
// };

// console.table(task8(cars));

const task9 = cars => {
  return cars.every(car => {
    return car.onSale;
  });
};

const task10 = cars => {
  return cars.every(car => car.price);
};

// console.log(task9(cars));
