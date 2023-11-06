function userTemplate(user) {
  return `<li> ${user.name}</li>`;
}

export function usersTemplate(users) {
  return users.map(userTemplate).join('');
}
