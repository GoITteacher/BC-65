const formElem = document.querySelector('.js-register-form');
const colorElem = document.querySelector('.js-input-color');
const sizeElem = document.querySelector('.js-input-size');
const userNameElem = document.querySelector('.js-input-username');

formElem.addEventListener('submit', onFormElemSubmit);
colorElem.addEventListener('input', onColorElemChange);
sizeElem.addEventListener('input', onSizeElemChange);
userNameElem.addEventListener('blur', onNameElemBlur);
userNameElem.addEventListener('focus', onNameElemFocus);
// ================

function onFormElemSubmit(event) {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  const subscription = event.target.elements.subscription.value;
  const spam1 = event.target.elements.spam1;
  const spam2 = event.target.elements.spam2;
  const spam3 = event.target.elements.spam3;

  const result = { username, email, password, subscription };

  if (spam1.checked) {
    result.spam1 = spam1.value;
  }
  if (spam2.checked) {
    result.spam2 = spam2.value;
  }
  if (spam3.checked) {
    result.spam3 = spam3.value;
  }

  console.log(result);
  event.target.reset();
}

function onColorElemChange(event) {
  document.body.style.backgroundColor = event.target.value;
}

function onSizeElemChange(event) {
  const size = event.target.value;
  colorElem.style.transform = `scale(${size})`;
}

function onNameElemBlur(event) {
  const name = event.target.value;
  const minLength = +event.target.dataset.minLength;

  if (name.length > minLength) {
    event.target.classList.add('valid');
  } else {
    event.target.classList.add('invalid');
  }
}

function onNameElemFocus(event) {
  event.target.classList.remove('valid');
  event.target.classList.remove('invalid');
}
