import { getMenuData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

window.app = {};
app.store = Store;
app.router = Router;

// Wait for DOM is ready for manipulation before execution of app script
window.addEventListener("DOMContentLoaded", async () => {
  window.app.store.menu = await getMenuData();
  app.router.init();
});
