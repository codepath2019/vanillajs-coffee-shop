import API from "./services/API.js";
import Store from "./services/Store.js";
// Wait for DOM is ready for manipulation before execution of app script
window.addEventListener("DOMContentLoaded", async () => {
  const response = await API.fetchMenu();
  Store.menu = response;
});
