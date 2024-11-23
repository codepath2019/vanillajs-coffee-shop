import { loadMenuData } from "../services/Menu.js";

export class DetailsPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("details-page-template");
    const content = template.content.cloneNode(true);
    const styles = document.createElement("style");
    this.root.appendChild(content);
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/DetailsPage.css");
      styles.textContent = await request.text();
    }
    loadCSS();
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const productId = this.dataset.id;
    let currentProduct = null;

    if (app.store.menu === null) {
      await loadMenuData();
    }

    if (productId) {
      for (const category of app.store.menu) {
        for (const product of category.products) {
          if (product.id === parseInt(productId)) {
            currentProduct = product;
          }
        }
      }
      this.root.querySelector("h2").textContent = currentProduct.name;
      this.root
        .querySelector("img")
        .setAttribute("src", `/data/images/${currentProduct.image}`);
      this.root.querySelector(".description").textContent =
        currentProduct.description;
      this.root.querySelector(".price").textContent = currentProduct.price;
    } else {
      alert("Sorry! We cannot find the prodcut you are looking for!");
    }
  }
}

customElements.define("details-page", DetailsPage);
