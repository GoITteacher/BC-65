const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const tableCarsElem = document.querySelector('.js-table-cars');
const tbodyElem = tableCarsElem.lastElementChild;

function carTemplate(car) {
  const { make, model, type, amount, price, onSale } = car;

  return `
<tr class="${onSale ? 'on-sale' : 'not-sale'}">
  <td>${make}</td>
  <td>${model}</td>
  <td>${type}</td>
  <td style="text-align: center">${amount}</td>
  <td>${price}</td>
  <td>${onSale}</td>
  <td>${price * amount}</td>
</tr>`;
}

function carsTemplate(carsArr) {
  return carsArr.map(carTemplate).join('\n\n');
}

function renderCars(carsArr) {
  const markup = carsTemplate(carsArr);
  tbodyElem.insertAdjacentHTML('afterbegin', markup);
}

renderCars(cars);

// =========================

const carElements = document.querySelectorAll('tbody>tr');
for (let i = 0; i < carElements.length; i += 2) {
  carElements[i].classList.add('odd');
}
// =========================
