import { getMenuData } from "./services/Menu.js";
import Store from "./services/Store.js";

window.app = {};
app.store = Store;

// Wait for DOM is ready for manipulation before execution of app script
window.addEventListener("DOMContentLoaded", async () => {
  window.app.store.menu = await getMenuData();
});
