const refs = {
  formEl: document.querySelector('.js-search-form[data-id="4"]'),
  infoEl: document.querySelector('.js-ip-form'),
};
function searchIP(info) {
  const BASE_URL = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com';
  const END_POINT = '/json/';
  const PARAMS = `?ip=${info}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
    },
  };
  return fetch(url, options).then(res => res.json());
}

refs.formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(e) {
  e.preventDefault();

  const userIp = e.target.elements.query.value;

  searchIP(userIp).then(res => {
    refs.infoEl.innerHTML = createTemplate(res);
  });
}

function createTemplate(res) {
  const {
    country_flag,
    country,
    ip,
    city,
    timezone,
    currency,
    currency_rates,
    completed_requests,
    latitude,
    longitude,
  } = res;

  return `<div class="info-item">
  <img
    class="flag"
    src="${country_flag}"
    alt="Flag of ${country}"
  />
  <span class="info-label">Country:</span>
  <span class="info-value">${country}</span>
</div>
<div class="info-item">
  <span class="info-label">IP Address: </span>
  <span class="info-value">${ip}</span>
</div>
<div class="info-item">
  <span class="info-label">City: </span> <span class="info-value">${city}</span>
</div>
<div class="info-item">
  <span class="info-label">Timezone: </span>
  <span class="info-value">${timezone}</span>
</div>
<div class="info-item">
  <span class="info-label">Currency:</span>
  <span class="info-value">${currency}</span>
</div>
<div class="info-item">
  <span class="info-label">Currency Rate:</span>
  <span class="info-value">${currency_rates}</span>
</div>
<div class="info-item">
  <span class="info-label">Completed Requests:</span>
  <span class="info-value">${completed_requests}</span>
</div>
<div class="info-item">
  <span class="info-label">Google Maps:</span>
  <a href="https://www.google.com.ua/maps/@${latitude},${longitude},13.18z?entry=ttu"><span class="info-value">Тицяй</span></a>
</div>`;
}

/* 

*/
