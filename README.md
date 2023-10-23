# Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

1. Задача: Підрахунок суми чисел в масиві. Напишіть функцію sumArray, яка
   приймає масив чисел та callback-функцію. Функція sumArray повинна обчислити
   суму чисел у масиві та передати результат у callback-функцію.
1. Задача: Перетворення кожного елемента масиву. Створіть функцію
   transformArray, яка приймає масив та callback-функцію. Функція transformArray
   повинна викликати callback-функцію для кожного елемента масиву та створити
   новий масив з результатами.
1. Задача: Пошук об'єкта в масиві. Напишіть функцію findObject, яка приймає
   масив об'єктів та callback-функцію. Функція findObject повинна перевірити
   кожен об'єкт у масиві за допомогою callback-функції і повернути перший
   об'єкт, який задовольняє умову.
1. Задача: Виведення повідомлення з використанням callback. Напишіть функцію
   printMessage, яка приймає рядок та callback-функцію. Функція printMessage
   повинна вивести переданий рядок та викликати callback-функцію після
   виведення.
1. Задача: Підрахунок суми чисел у масиві. Напишіть функцію, яка приймає масив
   чисел та використовує цикл forEach для підрахунку їхньої суми.
1. Задача: Виведення елементів масиву. Створіть функцію, яка приймає масив та
   використовує цикл forEach для виведення кожного елемента масиву в консоль.
1. Задача: Перетворення елементів масиву. Напишіть функцію, яка приймає масив та
   використовує цикл forEach для зміни кожного елемента масиву та створення
   нового масиву зі зміненими значеннями.
1. Задача: Видалення елементів із масиву. Створіть функцію, яка приймає масив та
   використовує цикл forEach для видалення певних елементів із масиву на основі
   умови.
1. Задача: Пошук об'єкта в масиві за властивістю. Напишіть функцію, яка приймає
   масив об'єктів та використовує цикл forEach для пошуку об'єкта за певною
   властивістю.
1. Задача: Перетворення масиву об'єктів у новий масив. Створіть функцію, яка
   приймає масив об'єктів та використовує цикл forEach для виділення певних
   властивостей об'єктів і створення нового масиву.
1. Задача: Валідація даних в масиві. Напишіть функцію, яка приймає масив даних
   та використовує цикл forEach для перевірки кожного елемента на валідність за
   певною умовою.
1. Задача: Зміна регістру символів у рядку. Створіть функцію, яка приймає рядок
   та використовує цикл forEach для зміни регістру кожного символу у рядку
   (наприклад, перетворення на великі літери або на малі).
1. Задача: Пошук середнього значення у масиві чисел. Напишіть функцію, яка
   приймає масив чисел та використовує цикл forEach для обчислення середнього
   значення цих чисел.
1. Задача: Видалення дублікатів у масиві. Створіть функцію, яка приймає масив та
   використовує цикл forEach для видалення дублікатів із масиву.

---

## Example 1 - Коллбек функции

Напишите следующие функции:

- `createProduct(obj, callback)` - принимает объект товара без id, а также
  колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
  свойство `id` и вызывает колбек передавая ему созданный обьект.
- `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
  консоль
- `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
  общую стоимость товара в консоль

```js
// Решение

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
```

## Example 2 - Коллбек функции

Добавьте объекту `account` методы `withdraw(amount, onSuccess, onError)` и
`deposit(amount, onSuccess, onError)`, где первый параметр это сумма операции, а
второй и третий - колбеки.

Метод `withdraw` вызывает onError если amount больше TRANSACTION_LIMIT или
this.balance, и onSuccess в противном случае.

Метод `deposit` вызывает onError если amount больше TRANSACTION_LIMIT или меньше
либо равен нулю, и onSuccess в противном случае.

```js
const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
```

## Example 3 - Коллбек функции

Напишите функцию `each(array, callback)`, которая первым параметром ожидает
массив, а вторым - функцию, которая применится к каждому элементу массива.
Функция each должна вернуть новый массив, элементами которого будут результаты
вызова коллбека.

```js
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);
```

## Example 4 - Стрелочные функции

Выполните рефакторинг кода используя стрелочные функции.

```js
function createProduct(partialProduct, callback) {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice(product) {
  console.log(product.price * product.quantity);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
```

## Example 5 - Стрелочные функции

Выполните рефакторинг кода используя стрелочные функции.

```js
const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
```

## Example 6 - Инлайн стрелочные функции

Выполните рефакторинг кода используя стрелочные функции.

```js
function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);
```

## Example 7 - Метод forEach

Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

```js
function logItems(items) {
  console.log(items);
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
```

## Example 8 - Метод forEach

Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

```js
function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
```

## Example 9 - Метод forEach

Выполните рефакторинг кода используя метод `forEach` и стрелочные функции.

```js
function calсulateAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
```

---

# Codewars

1. [Kata Series](https://www.codewars.com/kata/572ab0cfa3af384df7000ff8)
1. [Kata](https://www.codewars.com/kata/55a1528cca4a6d4c5a0000e3/train/javascript)
1. [Kata](https://www.codewars.com/kata/5983cba828b2f1fd55000114)
1. [Kata](https://www.codewars.com/kata/5848565e273af816fb000449)
1. [Kata](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)
1. [Kata](https://www.codewars.com/kata/59df2f8f08c6cec835000012)
1. [Kata](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)
1. [Kata](https://www.codewars.com/kata/5783ef69202c0ee4cb000265)
1. [Kata](https://www.codewars.com/kata/60cc93db4ab0ae0026761232)
