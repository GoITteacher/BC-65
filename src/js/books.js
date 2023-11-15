import '../css/common.css';
import { BookAPI } from './modules/booksAPI';

const refs = {
  bookListEl: document.querySelector('.js-article-list'),
  createFormEL: document.querySelector('.js-create-form'),
  updateFormEL: document.querySelector('.js-update-form'),
  resetFormEL: document.querySelector('.js-reset-form'),
  deleteFormEL: document.querySelector('.js-delete-form'),
};

const booksAPI = new BookAPI();

refs.createFormEL.addEventListener('submit', onCreateFormSubmit);
function onCreateFormSubmit(e) {
  e.preventDefault();
  const title = e.target.elements.bookTitle.value;
  const author = e.target.elements.bookAuthor.value;
  const desc = e.target.elements.bookDesc.value;
  const book = {
    title,
    author,
    desc,
  };

  booksAPI.createBook(book).then(newBook => {
    const markup = bookTemplate(newBook);
    refs.bookListEl.insertAdjacentHTML('afterbegin', markup);
  });
}

refs.resetFormEL.addEventListener('submit', onResetFormSubmit);

function onResetFormSubmit(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    key = key.toLowerCase().replace('book', '');
    book[key] = value;
  });

  booksAPI.resetBook(book).then(updatedBook => {
    const markup = bookTemplate(updatedBook);
    const oldBookEl = document.querySelector(`[data-id="${book.id}"]`);
    oldBookEl.insertAdjacentHTML('afterend', markup);
    oldBookEl.remove();
  });
}

function bookTemplate({ id, title, desc, author }) {
  return `<li class="card book-item" data-id="${id}">
  <h4>${id} - ${title}</h4>
  <p>${desc}</p>
  <p>${author}</p>
</li>`;
}

function booksTemplate(bookArr) {
  return bookArr.map(bookTemplate).join('');
}

function renderBooks(bookArr) {
  const markup = booksTemplate(bookArr);
  refs.bookListEl.innerHTML = markup;
}

booksAPI
  .getBooks()
  .then(res => {
    renderBooks(res.reverse());
  })
  .catch(err => {
    console.log(err);
  });
