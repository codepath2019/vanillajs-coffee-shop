import API from "./API.js";

export async function getMenuData() {
  return API.fetchMenu();
}
