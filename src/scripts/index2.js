let gallery = new SimpleLightbox('.gallery a', {
  navText: ['<', '>'],
  captions: true,
  captionPosition: 'top',
  enableKeyboard: false,
});

gallery.on('close.simplelightbox', onSimpleLightboxClose);
gallery.on('shown.simplelightbox', onSimpleLightboxShown);

function onSimpleLightboxClose(e) {
  console.log('Приходьте ще');
}

function onSimpleLightboxShown() {
  alert('Вітаю');
}

const btnElem = document.querySelector('.js-show-btn');
btnElem.addEventListener('click', () => {
  gallery.openPosition(0);
});

window.addEventListener('keydown', e => {
  console.log(e.code);
  gallery.next();
});
