export const setDataInLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getDataInLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const clearLocalStorage = ()=>localStorage.clear()