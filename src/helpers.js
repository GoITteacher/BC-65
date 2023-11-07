export function saveToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return data;
  }
}
