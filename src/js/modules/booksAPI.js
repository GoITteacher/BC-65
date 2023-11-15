import axios from 'axios';

const axiosV2 = axios.create({
  baseURL: 'http://localhost:3000',
});

export class BookAPI {
  getBooks() {
    return axiosV2
      .get('/books')
      .then(res => res.data)
      .catch(err => console.log(err));
  }
  createBook(book) {
    return axiosV2
      .post('/books', book)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
  updateBook() {}
  resetBook({ id, ...book }) {
    return axiosV2
      .patch(`/books/${id}`, book)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
  deleteBook() {}
}
