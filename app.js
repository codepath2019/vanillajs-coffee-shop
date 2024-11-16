import { getMenuData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

// Link web components
import { DetailsPage } from "./components/DetailsPage.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { ProductItem } from "./components/ProductItem.js";

MenuPage;
DetailsPage;
OrderPage;
ProductItem;

window.app = {};
app.store = Store;
app.router = Router;

// Wait for DOM is ready for manipulation before execution of app script
window.addEventListener("DOMContentLoaded", async () => {
  // NOTE: of app.router.init() comes after the initialization of menu store
  // then any initial data fetch, in this case, the only data fetch for menu data
  // will not trigger the event handler for appmenuchange! This is problematic!
  // What's a way to solve this?
  app.router.init();
  window.app.store.menu = await getMenuData();
});
