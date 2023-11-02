import { users, albums, photos } from './data.js';

const refs = {
  inputElement: document.querySelector('.js-input'),
  userListEl: document.querySelector('.js-user-list'),
  albumListEl: document.querySelector('.js-album-list'),
  photoListEl: document.querySelector('.js-photo-list'),
  backdropEl: document.querySelector('.backdrop'),
};

function usersTemplate(users) {
  return users.map(({ id, name }) => {
    return `<li class="user-item" data-id="${id}">${name}</li>`;
  });
}

function renderUsers(users) {
  const markup = usersTemplate(users).join('');
  refs.userListEl.innerHTML = markup;
}

renderUsers(users);

refs.inputElement.addEventListener(
  'input',
  _.debounce(onInputElementChange, 300),
);

function onInputElementChange(e) {
  const find = e.target.value;
  const filteredUsers = users.filter(el => {
    return el.name.includes(find);
  });
  renderUsers(filteredUsers);
}

function imgsTemplate(photos) {
  return photos
    .map(element => {
      return `<img class="lazyload blur-up" src="https://upload.wikimedia.org/wikipedia/ru/7/77/Pikachu.png" data-src="https://source.unsplash.com/500x500/?random=${element.id}&user,car,bird,cat,dog"/>`;
    })
    .join('');
}

function renderImgs(photos) {
  photos = photos.slice(0, 50);
  const imgMarkup = imgsTemplate(photos);
  refs.photoListEl.innerHTML = imgMarkup;
}

renderImgs(photos);

/* 
{
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  }
*/
