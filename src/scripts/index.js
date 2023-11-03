const myBtnElem = document.querySelector('.js-show-modal');

let counter = 0;
let instance;

myBtnElem.addEventListener('click', e => {
  counter += 1;
  instance = basicLightbox.create(
    `<div class="modal-box">
    <h1>My MOdal</h1>
    <button class="js-btn-close">Close</button>
    </div>`,
    {
      onShow: instance => {
        console.log('Add listener');
        window.addEventListener('keydown', onEscPress);
      },
      onClose: instance => {
        console.log('Remove listener');
        window.removeEventListener('keydown', onEscPress);
      },
    },
  );

  instance.show(myCallback);
});

function myCallback(obj) {
  const closeBtn = obj.element().querySelector('.js-btn-close');
  closeBtn.addEventListener('click', () => {
    obj.close();
  });
}

function onEscPress(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    instance.close();
  }
}

// ================================
