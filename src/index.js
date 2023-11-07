import { saveToLs, loadFromLS } from './helpers';

const refs = {
  formElem: document.querySelector('.js-form1'),
};

refs.formElem.addEventListener('input', onFormElemInput);

function onFormElemInput(evt) {
  const userForm = {};
  // userForm.userName = refs.formElem.elements.name.value;
  // userForm.userBio = refs.formElem.elements.bio.value;
  // userForm.userPassword = refs.formElem.elements.password.value;

  const formData = new FormData(refs.formElem);

  formData.forEach((value, key) => {
    userForm[key] = value;
  });

  saveToLs('userData', userForm);
}

function onLoad() {
  const data = loadFromLS('userData') || {};

  // refs.formElem.elements.name.value = data.name;
  // refs.formElem.elements.bio.value = data.bio;
  // refs.formElem.elements.password.value = data.password;

  // ['name', 'bio','password']
  for (const key of Object.keys(data)) {
    refs.formElem.elements[key].value = data[key];
  }
}

function onFormElemSubmit(e) {
  e.preventDefault();

  const data = loadFromLS('userData');
  localStorage.removeItem('userData');
  e.target.reset();
  console.log(data);
}

refs.formElem.addEventListener('submit', onFormElemSubmit);

onLoad();
