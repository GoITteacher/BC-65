import axios from 'axios';

const axiosV2 = axios.create({
  baseURL: 'http://localhost:3000',
});

export class BookAPI {
  async getBooks() {
    try {
      const res = await axiosV2.get('/books');
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  async createBook(book) {
    try {
      const res = await axiosV2.post(`/books`, book);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async updateBook({ id, ...book }) {
    try {
      const response = await axiosV2.patch(`/books/${id}`, book);
      return response.data;
    } catch (err) {
      console.log(err);
      return {};
    }
  }

  resetBook({ id, ...book }) {
    return axiosV2
      .put(`/books/${id}`, book)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  async deleteBook(id) {
    const response = await axiosV2.delete(`/books/${id}`);
    return response;
  }
}
