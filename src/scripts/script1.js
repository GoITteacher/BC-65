// const refs = {
//   usernameElem: document.querySelector('.js-input-username'),
//   formElem: document.querySelector('.js-register-form'),
//   inputSizeElem: document.querySelector('#js-input-size'),
//   inputColorElem: document.querySelector('#js-input-color'),
// };

import { users } from './data';
import { usersTemplate } from './markups';

const refs = {
  userListElem: document.querySelector('.js-user-list'),
};

function renderUsers(users) {
  const markup = usersTemplate(users);
  refs.userListElem.insertAdjacentHTML('afterbegin', markup);
}

renderUsers(users);
