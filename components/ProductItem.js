import Router from "../services/Router.js";

export class ProductItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById("product-item-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const productData = JSON.parse(this.dataset.product);
    this.querySelector("img").setAttribute(
      "src",
      `data/images/${productData.image}`
    );
    this.querySelector("h4").textContent = productData.name;
    this.querySelector("p.price").textContent = productData.price;
    const productItemLinkElement = this.querySelector("a");
    productItemLinkElement.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.tagName.toLowerCase() == "button") {
        alert("Feature: adding to cart, is being developed {^_^}");
      } else {
        Router.go(`/product-${productData.id}`);
      }
    });
  }
}

customElements.define("product-item", ProductItem);
