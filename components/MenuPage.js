export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const styleElement = document.createElement("style");
    this.root.appendChild(styleElement);

    async function loadCSS() {
      const request = await fetch("/components/MenuPage.css");
      const css = await request.text();
      styleElement.textContent = css;
    }
    loadCSS();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    const templateElement = document.getElementById("menu-page-template");
    const content = templateElement.content.cloneNode(true);
    this.root.appendChild(content);
    this.render();
    window.addEventListener("appmenuchange", () => {
      this.render();
    });
  }

  render() {
    if (app.store.menu) {
      this.root.querySelector("#menu").innerHTML = "";
      for (const category of app.store.menu) {
        const categoryLi = document.createElement("li");
        categoryLi.innerHTML = `
          <h3>${category.name}</h3>
          <ul class="category"></ul>
        `;
        this.root.querySelector("#menu").appendChild(categoryLi);

        category.products.forEach((product) => {
          const productItemElement = document.createElement("product-item");
          productItemElement.dataset.product = JSON.stringify(product);
          categoryLi.querySelector("ul").appendChild(productItemElement);
        });
      }
    } else {
      this.root.querySelector("#menu").innerHTML =
        "Beverages menu coming right up ...";
    }
  }
}

customElements.define("menu-page", MenuPage);
