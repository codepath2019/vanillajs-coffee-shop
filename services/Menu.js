import API from "./API.js";

export async function getMenuData() {
  return API.fetchMenu();
}

export async function loadMenuData() {
  const menuData = await API.fetchMenu();
  window.app.store.menu = menuData;
}
