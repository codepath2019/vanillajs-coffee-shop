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
  }
}

customElements.define("menu-page", MenuPage);
