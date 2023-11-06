const refs = {
  usernameElem: document.querySelector('.js-input-username'),
  formElem: document.querySelector('.js-register-form'),
  inputSizeElem: document.querySelector('#js-input-size'),
  inputColorElem: document.querySelector('#js-input-color'),
};

refs.inputSizeElem.addEventListener('input', e => {
  const size = e.target.value;
  refs.inputColorElem.style.transform = `scale(${size})`;
});

refs.inputColorElem.addEventListener('change', e => {
  const color = e.target.value;
  refs.formElem.style.backgroundColor = color;
});
