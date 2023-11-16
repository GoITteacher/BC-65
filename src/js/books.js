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
// ============= LISTENER ===========
refs.createFormEL.addEventListener('submit', onCreateFormSubmit);
refs.resetFormEL.addEventListener('submit', onResetFormSubmit);
refs.updateFormEL.addEventListener('submit', onUpdateFormSubmit);
refs.deleteFormEL.addEventListener('submit', onDeleteFormSubmit);

// ============= CALLBACK ===========
async function onCreateFormSubmit(e) {
  e.preventDefault();
  const title = e.target.elements.bookTitle.value;
  const author = e.target.elements.bookAuthor.value;
  const desc = e.target.elements.bookDesc.value;
  const book = {
    title,
    author,
    desc,
  };

  try {
    const newBook = await booksAPI.createBook(book);
    const markup = bookTemplate(newBook);
    refs.bookListEl.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    console.log(err);
  }
}
async function onResetFormSubmit(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    key = key.toLowerCase().replace('book', '');
    book[key] = value;
  });

  try {
    const updatedBook = await booksAPI.resetBook(book);
    const markup = bookTemplate(updatedBook);
    const oldBookEl = document.querySelector(`[data-id="${book.id}"]`);
    oldBookEl.insertAdjacentHTML('afterend', markup);
    oldBookEl.remove();
  } catch (err) {
    console.log(err);
  }
}
async function onUpdateFormSubmit(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    if (!value.trim()) return;
    key = key.toLowerCase().replace('book', '');
    book[key] = value;
  });

  const updatedBook = await booksAPI.updateBook(book);
  const markup = bookTemplate(updatedBook);
  const oldBookEl = refs.bookListEl.querySelector(`[data-id="${book.id}"]`);
  oldBookEl.insertAdjacentHTML('afterend', markup);
  oldBookEl.remove();
}
async function onDeleteFormSubmit(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  await booksAPI.deleteBook(id);
  const oldBookEl = refs.bookListEl.querySelector(`[data-id="${id}"]`);
  oldBookEl.remove();
}

// ============= HELPERS ===========
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
