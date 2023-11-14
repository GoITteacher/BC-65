import { NewsAPI } from './modules/newsAPI';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  containerEl: document.querySelector('.js-article-list'),
  loadMoreBtnEl: document.querySelector('.js-btn-load'),
};

refs.formEl.addEventListener('submit', onFormElSubmit);
refs.loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

const newsAPI = new NewsAPI();

function onLoadMoreBtnClick() {
  newsAPI.page += 1;

  newsAPI.fetchNews().then(res => {
    renderMarkup(res.articles);
  });

  updateStatusLoadMore();
}

function onFormElSubmit(e) {
  e.preventDefault();
  const userValue = e.target.elements.query.value;

  newsAPI.q = userValue;
  newsAPI.page = 1;

  newsAPI.fetchNews().then(res => {
    newsAPI.totalPage = Math.ceil(res.totalResults / NewsAPI.PAGE_SIZE);

    refs.containerEl.innerHTML = '';
    renderMarkup(res.articles);
    refs.loadMoreBtnEl.disabled = false;
    updateStatusLoadMore();
  });
}

function templateArticle(
  { urlToImage, title, description, author, publishedAt },
  index,
) {
  return `<li class="card news-card" data-i="${index}">
<img loading="lazy"
  class="news-image"
  src="${urlToImage}"
  alt="${title}"
/>
<h3 class="card-title">
  ${title}
</h3>
<p class="card-desc">
${description}
</p>
<div class="card-footer">
  <span>${author}</span>
  <span>${publishedAt}</span>
</div>
</li>`;
}

function templateArticles(articles) {
  const template = articles.map(templateArticle).join('');
  return template;
}

function renderMarkup(articles) {
  const markup = templateArticles(articles);
  refs.containerEl.insertAdjacentHTML('beforeend', markup);
}

function updateStatusLoadMore() {
  refs.loadMoreBtnEl.disabled = newsAPI.page >= newsAPI.totalPage;
}
