<li class="user-item" data-id="${id}">${name}</li>

<li class="album box" data-id=${el.id}>${el.title}</li>

<img class="lazyload blur-up" src="https://upload.wikimedia.org/wikipedia/ru/7/77/Pikachu.png" data-src="https://source.unsplash.com/500x500/?random=${element.id}&user,car,bird,cat,dog"/>

<div class="modalka">
  <h2>${user.name}</h2>
  <hr/>
  - <span>${user.email}</span><br />
  - <span>${user.phone}</span><br />
  - <a href="${user.website}">website</a>
  <hr />
  Adress: ${user.address.city} ${user.address.street}
  <hr />
  Company: ${user.company.name}
  <hr />
  <div class="fb fb-v list js-modal-list">
  ${photoMarkup}
  </div>
  </div>
