const formEl = document.querySelector('.js-search-form[data-id="5"]');
const infoEl = document.querySelector('.js-pokemon-list');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const pokemonName = event.target.elements.query.value;
  getPokemon(pokemonName).then(data => {
    infoEl.insertAdjacentHTML('afterbegin', pokemonTemplate(data));
  });
}
function getPokemon(pokemon) {
  const BASE_URL = 'https://pokeapi.co';
  const END_POINT = '/api/v2/pokemon';
  const PARAMS = `/${pokemon}`;
  const url = BASE_URL + END_POINT + PARAMS;
  return fetch(url).then(res => res.json());
}

function pokemonTemplate(pokemon) {
  const {
    name,
    sprites: { back_default, front_default },
    id,
    height,
    weight,
    base_experience,
  } = pokemon;
  return `
  <div class="pokemon-card pokemon-item">
  <h1 class="pokemon-name">${name} - Pokemon Details</h1>
  <img data-back="${back_default}" data-front="${front_default}"
    class="pokemon-image js-pocimage"
    src="${front_default}"
    alt="${name}"
  />

  <h2 class="section-title">Basic Information</h2>
  <ul class="info-list">
    <li>ID: ${id}</li>
    <li>Height: ${height} decimetres</li>
    <li>Weight: ${weight} grams</li>
    <li>Base Experience: ${base_experience}</li>
  </ul>
</div>`;
}
