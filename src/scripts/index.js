const formEl = document.querySelector('.js-form');
const listElem = document.querySelector('.js-tasks');
const taskManager = new TaskManager();
const backdropElem = document.querySelector('.js-backdrop');

formEl.addEventListener('submit', onFormElSubmit);
listElem.addEventListener('click', onShowMoreClick);
backdropElem.addEventListener('click', onBackdropClick);
listElem.addEventListener('click', onDeleteClick);

function onFormElSubmit(e) {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const image = e.target.elements.image.value;
  const description = e.target.elements.description.value;
  const priority = e.target.elements.priority.value;

  const task = taskManager.createTask(title, description, priority, image);
  e.target.reset();

  const markup = taskTemplate(task);
  listElem.insertAdjacentHTML('beforeend', markup);
}
function onShowMoreClick(event) {
  const isButton = event.target.nodeName === 'BUTTON';
  const isShowBtn = event.target.dataset.type === 'show';
  if (!(isButton && isShowBtn)) return;
  showModal();
}
function onDeleteClick(event) {
  const isButton = event.target.nodeName === 'BUTTON';
  const isDeleteBtn = event.target.dataset.type === 'delete';
  if (isButton && isDeleteBtn) {
    event.target.closest('li').remove();
  }
}

function onBackdropClick(event) {
  if (event.target == event.currentTarget) hideModal();
}

function showModal() {
  document.body.classList.add('show-modal');
}

function hideModal() {
  document.body.classList.remove(`show-modal`);
}

function taskTemplate({ title, description, priority, image }) {
  return `<li class="box task ${priority}">
  <h3>${title}</h3>
  <h5>Priority - ${priority}</h5>
  <div class="fb">
    <p class="task-desc">
      ${description}
    </p>
    <img
      src="${image}"
      alt=""
    />
  </div>
  
  <button class="form-control" data-type="show">SHOW MORE</button>
  <button class="form-control" data-type="delete">DELETE</button>
  </li>`;
}
