# Модуль 1. Заняття 1. Змінні, типи та оператори

## Приклад 1 - Математичні оператори

Виведіть на екран загальну кількість яблук і винограду. Різницю яблук і
винограду.

```js
const apples = 47;
const grapes = 135;
const total = ;
console.log(total)
const diff = ;
console.log(diff)
```

## Приклад 2 - Комбіновані оператори

Замініть вираз переозначення комбінованим оператором `+=`.

```js
let cars = 100;
cars = cars + 50;
console.log(cars);
```

## Приклад 3 - Пріоритет операторів

Розгляньте пріоритет операторів у інструкції присвоєння значення змінній
`result`.

```js
const result = 10 + 22 - 2 * 5;
console.log(result);
```

## Приклад 4 - Клас Math

Напишіть скрипт, який виводить в консоль округлені вверх/вниз і т.д. значення
змінної `value`. Використовуйте методи `Math.floor()`, `Math.ceil()` і
`Math.round()`. Перевірте, що буде в консолі при значеннях `27.3` і `27.9`.

```js
const value = 22.8;
```

## Приклад 5 - Шаблонні рядки

Складіть фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
змінні вставлені в рядок.

```js
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = ``;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
```

## Приклад 6 - Методи рядків і ланцюжки

Напишіть скрипт, який розраховує індекс маси тіла людини. Для цього необхідно
поділити вагу в кілограмах на квадрат зросту людини в метрах.

Вага і зріст зберігаються в змінних `weight` і `height`, але не як числа, а в
вигляді рядків (спеціально для задачі). Нецілі числа можуть бути вказані у
вигляді `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.

Індекс маси тіла необхідно округлити до однієї цифри після коми;

```js
let weight = '88,3';
let height = '1.75';

const bmi = ;
console.log(bmi); // 28.8
```

## Example 7 - Операторы сравнения и приведение типов

Каким будет результат выражений?

```js
console.log(5 > 4);

console.log(10 >= '7');

console.log('2' > '12');

console.log('2' < '12');

console.log('4' == 4);

console.log('6' === 6);

console.log('false' === false);

console.log(1 == true);

console.log(1 === true);

console.log('0' == false);

console.log('0' === false);

console.log('Papaya' < 'papaya');

console.log('Papaya' === 'papaya');

console.log(undefined == null);

console.log(undefined === null);
```

## Example 8 - Логические операторы

Каким будет результат выражений?

```js
console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && 'kiwi');

console.log(true && 0 && 'kiwi');

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);
```

```js
console.log(1 && 5);
console.log(5 && 1);
console.log(0 && 2);
console.log(2 && 0);
console.log('' && 'Mango');
console.log('Mango' && '');
console.log('Mango' && 'Poly');
console.log('Poly' && 'Mango');
```

```js
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(3 || false);
console.log(false || 3);
console.log(3 || true);
console.log(true || 3);
```

```js
console.log(!true);
console.log(!false);
console.log(!3);
console.log(!'Mango');
console.log(!0);
console.log(!'');

const isOnline = true;
const isNotOnline = !isOnline;
```

## Приклад 9 - Значення за замовчуванням та оператор нульового об'єднання

Переробіть код так, щоб у змінну `value` присвоювалося значення змінної
`incomingValue`, якщо воно не рівне `undefined` або `null`. У іншому випадку,
повинно присвоюватися значення `defaultValue`. Перевірте роботу скрипта для
наступних значень змінної `incomingValue`: null, undefined, 0, false.
Використовуйте оператор `??` (nullish coalescing operator).

```js
const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue ?? defaultValue;
console.log(value);
```

## Приклад 10 - Оператор % і методи рядків

Напишіть скрипт, який перетворить значення `totalMinutes` (кількість хвилин) в
рядок у форматі годин і хвилин `HH:MM`.

- 70 покаже 01:10
- 450 покаже 07:30
- 1441 покаже 24:01

```js
const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, '0');
const doubleDigitMinutes = String(minutes).padStart(2, '0');
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
```

---

## CodeWars

- [Kata 1](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)
- [Kata 2](https://www.codewars.com/kata/5748838ce2fab90b86001b1a)
