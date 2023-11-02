// const inputForm = document.querySelector('.js-form');

// inputForm.addEventListener('submit', e => {
//   e.preventDefault();
//   console.log('click');
//   copy(e);
// });

// const copy = _.debounce(onFormSubmit, 1000);

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log(e.target.elements['my-text'].value);
// }

// ----------------------------------
// const inputElem = document.querySelector('.js-input-text');
// inputElem.addEventListener(
//   'input',
//   _.debounce(e => {
//     console.log(e.target.value);
//   }, 300),
// );

// ===========================================================

const form = {
  innerHTML: '',
  textContent: '',
  children: [],
  firstElementChild: '',
  elements: {
    myInput: {
      value: '',
    },
  },
};

form.addEventListener('submit', e => {
  e.target.elements.myInput.value;
});

input.addEventListener('input', e => {
  e.target.value;
  console.log(e.target);
});

/* 
    <img src="....." alt="..." data-source="..." data-test="">
*/
