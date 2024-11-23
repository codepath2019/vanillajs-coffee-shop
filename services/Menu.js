import API from "./API.js";

export async function getMenuData() {
  return API.fetchMenu();
}

export async function loadMenuData() {
  const menuData = await API.fetchMenu();
  window.app.store.menu = menuData;
}

export async function getProductById(id) {
  for (const category of app.store.menu) {
    for (const product of category.products) {
      if (product.id === parseInt(id)) {
        return product;
      }
    }
  }
  return null;
}
