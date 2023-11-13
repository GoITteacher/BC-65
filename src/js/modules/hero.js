const formEl = document.querySelector('.js-search-form[data-id="1"]');
const infoEl = document.querySelector('.js-hero-container');

formEl.addEventListener(`submit`, onFormElSubmit);

function onFormElSubmit(event) {
  event.preventDefault();

  const userHero = event.target.elements.query.value;
  getHero(userHero).then(hero => {
    infoEl.insertAdjacentHTML('afterbegin', heroMarkup(hero));
  });
}

function heroMarkup(hero) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${hero.images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${hero.biography.fullName}</h4>
    <p class="hero-bio">
      ${hero.name} - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sed
      facilis, necessitatibus at neque cum deserunt maxime quos laudantium
      doloremque nesciunt ea voluptates! Atque fugiat assumenda incidunt
      laborum quas a!
    </p>
  </div>
</div>`;
}

function getHero(hero) {
  const BASE_URL = `https://superhero-search.p.rapidapi.com`;
  const END_POINT = `/api/`;
  const PARAMS = `?hero=${hero}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}
/* 

<div class="hero-card card">
    <div class="image-container">
      <img
        src="${lg}"
        alt="#"
        class="hero-image"
      />
    </div>
    <div class="hero-body">
      <h4 class="hero-name">${fullName}</h4>
      <p class="hero-bio">
        ${name} - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sed
        facilis, necessitatibus at neque cum deserunt maxime quos laudantium
        doloremque nesciunt ea voluptates! Atque fugiat assumenda incidunt
        laborum quas a!
      </p>
    </div>
  </div>
*/
