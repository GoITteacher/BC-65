const formEl = document.querySelector('.js-search-form[data-id="2"]');
const infoEl = document.querySelector('.js-binance-info');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const userValue = event.target.elements.query.value;
  getPrice(userValue).then(data => {
    infoEl.innerHTML = priceMarkup(data);
  });
}

function priceMarkup({ symbol, price }) {
  return `<span>${symbol}</span>
  <span>${(+price).toFixed(2)}</span>`;
}

function getPrice(symbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const PARAMS = `?symbol=${symbol}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}
