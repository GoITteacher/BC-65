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

function bookTemplate(book) {
  return `<li data-id="${book.id}" class="card articles">
  <h1>${book.title}</h1>
  <p>${book.desc}</p>
  <p>${book.author}</p>
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
    renderBooks(res);
  })
  .catch(err => {
    console.log(err);
  });
