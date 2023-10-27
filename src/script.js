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
Перевірте, чи всі автомобілі даної марки доступні для продажу та поверніть масив, що містить лише кольори доступних автомобілів.*/

function task1(model) {
  return cars
    .filter(car => car.model === model && car.onSale)
    .map(car => car.price)
    .filter((price, i, arr) => i === arr.indexOf(price));
}

// console.log(task1('CR-V'));

/* 
Знайдіть усі автомобілі, у яких кількість на складі більше 0, відсортуйте їх спадає за кількістю та повертає масив, що містить лише марки та моделі ці автомобілі.
*/

// filter sort map

function task13() {
  return [...cars]
    .filter(car => car.amount > 0)
    .sort((b, a) => a.amount - b.amount)
    .map(car => {
      const newObj = {
        make: car.make,
        model: car.model,
      };
      return newObj;
    });
}

/*  
Знайдіть індекс першого автомобіля з ціною менше 20000 і поверніть масив, що містить лише марки та моделі автомобілів після знайденого.
*/

function task4() {
  const index = cars.findIndex(car => car.price > 35000);
  return cars
    .filter((car, idx) => idx > index)
    .map(car => {
      const newObj = {
        make: car.make,
        model: car.model,
      };
      return newObj;
    });
}

// console.log(task4());
/* 
Обчисліть загальну кількість автомобілів заданого рік та поверніть новий масив, містить предмети з моделями та відповідними price автомобілів.*/

function task99(findYear) {
  const Arr = cars
    .filter(car => {
      return car.year === findYear;
    })
    .map(car => {
      return {
        model: car.model,
        price: car.price,
      };
    });
  console.log(Arr.length);
  return Arr;
}
console.log(task99(2022));

/* 
Знайдіть усі автомобілі з ціною від 40 000 до 60 000, відсортуйте їх за роками випускає від нового до старого та повертає масив, що містить лише моделі цих машин. */
/* 
Перевірте, чи є принаймні одна машина з кількістю на складі більше 5 і ціною вище 70 000.
 */
/* 
Знайдіть усі автомобілі, у яких кількість на складі більше 0, відсортуйте їх спадає за кількістю та повертає масив, що містить лише марки та моделі ці автомобілі.
 */
