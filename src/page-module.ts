class PageModule extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Page Module</h1>
      <p>This is a page module</p>
    `;
  }
}

if (!window.customElements.get('page-module')) {
  window.customElements.define('page-module', PageModule);
} else {
  console.warn("Page Module already defined");
}
