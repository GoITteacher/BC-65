export class NewsAPI {
  static BASE_URL = 'https://newsapi.org';
  static API_KEY = 'c8747511a2c34730a83caaff4f3693e7';
  static PAGE_SIZE = 30;

  constructor() {
    this.q = '';
    this.page = 1;
    this.totalPage = 1;
  }

  fetchNews() {
    const endPoint = '/v2/everything';
    const params = new URLSearchParams({
      apiKey: NewsAPI.API_KEY,
      q: this.q,
      page: this.page,
      pageSize: NewsAPI.PAGE_SIZE,
    });

    const url = `${NewsAPI.BASE_URL}${endPoint}?${params}`;
    return fetch(url).then(res => res.json());
  }
}
