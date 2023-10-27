const users = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@gmail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 42,
    email: 'bob@gmail.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Eva',
    lastName: 'Williams',
    age: 35,
    email: 'eva@gmail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'David',
    lastName: 'Brown',
    age: 22,
    email: 'david@yahoo.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 29,
    email: 'sophia@yahoo.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Miller',
    age: 50,
    email: 'michael@yahoo.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Wilson',
    age: 19,
    email: 'olivia@yahoo.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Thompson',
    age: 31,
    email: 'daniel@mail.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Harris',
    age: 27,
    email: 'ava@mail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jackson',
    age: 38,
    email: 'james@mail.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Taylor',
    age: 23,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    age: 45,
    email: 'william@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Martin',
    age: 29,
    email: 'mia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Joseph',
    lastName: 'Clark',
    age: 33,
    email: 'joseph@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Rodriguez',
    age: 26,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'John',
    lastName: 'Lopez',
    age: 31,
    email: 'john@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'Lee',
    age: 20,
    email: 'amelia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Benjamin',
    lastName: 'Gonzalez',
    age: 40,
    email: 'benjamin@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Chloe',
    lastName: 'Hernandez',
    age: 24,
    email: 'chloe@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Young',
    age: 37,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Miller',
    age: 38,
    email: 'olivia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jones',
    age: 29,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 31,
    email: 'sophia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Wilson',
    age: 52,
    email: 'william@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Taylor',
    age: 19,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Clark',
    age: 40,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Lee',
    age: 27,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Martinez',
    age: 35,
    email: 'daniel@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Isabella',
    lastName: 'Hernandez',
    age: 42,
    email: 'isabella@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Liam',
    lastName: 'Garcia',
    age: 26,
    email: 'liam@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Rodriguez',
    age: 30,
    email: 'mia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Noah',
    lastName: 'Lopez',
    age: 24,
    email: 'noah@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Perez',
    age: 29,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Ethan',
    lastName: 'Turner',
    age: 37,
    email: 'ethan@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'White',
    age: 23,
    email: 'amelia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Alexander',
    lastName: 'Jackson',
    age: 19,
    email: 'alexander@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Sofia',
    lastName: 'Brown',
    age: 33,
    email: 'sofia@example.com',
    isActive: true,
    gender: 'Female',
  },
];

/* {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 28,
  email: 'alice@example.com',
  isActive: true,
  gender: 'Female',
}, */

/* 
Створити масив з інформацією про користувачів як рядкових описів.
 */
function task1() {
  return users.map(user => {
    return `${user.lastName} ${user.firstName}`;
  });
}
// const result = task1();
// console.log(result);
/* 
Знайти індекс користувача з активним статусом і віком більшим або рівним 40 років.
*/

function task2() {
  return users.findIndex(user => user.isActive && user.age >= 40);
}
// console.log(task2());

/* 
Створити новий масив, що містить лише прізвища користувачів.
*/

function task3() {
  return users.map(user => user.lastName);
}

// console.log(task3());

/* 
Перевірити, чи є хоча б один користувач під назвою "John".
*/

function task4() {
  return users.some(user => user.firstName === 'John');
}

// console.log(task4());

/* 
Знайти користувача з найменшим віком.
*/

// function task5() {
//   return users.reduce((acc, user) => {
//     if (user.age <= acc.age) {
//       return user;
//     } else {
//       return acc;
//     }
//   }, users[0]);
// }

// console.log(task5());

//
/* 
Знайти користувачів з найменшим віком.
*/

function task6() {
  const minAge = users.reduce((minAge, user) => {
    if (user.age <= minAge) {
      return user.age;
    } else {
      return minAge;
    }
  }, users[0].age);

  return users.filter(user => user.age == minAge);
}

// console.log(task6());

/* Знайти всіх користувачів електронної пошти на домені yahoo.com. */

/* 
{
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@gmail.com',
    isActive: true,
    gender: 'Female',
  },
*/
function task7() {
  return users.filter(user => user.email.includes('gmail.com'));
}

// console.log(task7());

/* 
Відсортувати користувачів за віком (від молодшого до старшого).
*/

function task8() {
  return [...users].sort((a, b) => {
    return a.age - b.age;
  });
}
// console.log(task8());

/* 
Знайти користувачів із прізвищем, що починається на букву "".
*/

function task9() {
  return users.filter(user => user.lastName[0] == 'S');
}

// console.log(task9());

/* 
Знайти всіх користувачів з активним статусом та віком старше 25 років.
*/
function task10() {
  return users.filter(user => {
    return user.isActive && user.age > 25;
  });
}
// console.table(task10());

/* 
Порахувати загальну кількість користувачів.
*/
// const task11 = users.length;
// console.log(task11);

/* 
Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.
*/
function task12() {
  return users.filter(
    user => user.age >= 30 && user.age <= 50 && user.gender === 'Male',
  );
}

// console.log(task12());

/* 
Знайти індекс першого користувача під назвою "Jane".
*/

function task13() {
  return users.findIndex(user => user.firstName === 'Alice');
}
// console.log(task13());

/* 
Відсортувати користувачів на прізвище в алфавітному порядку.
*/

function task14() {
  return [...users].sort((a, b) => {
    return a.lastName.localeCompare(b.lastName);
  });
}

// console.log(task14());

//Порахувати кількість неактивних користувачів.

function task15() {
  return users.filter(user => {
    return !user.isActive;
  }).length;
}

// console.log(task15());

//Знайти всіх жінок серед користувачів і написати їх імена велики літерами

function task16() {
  return users
    .filter(user => user.gender === 'Female')
    .map(user => {
      user.firstName = user.firstName.toUpperCase();
      return user;
    });
}

// console.log(task16());
