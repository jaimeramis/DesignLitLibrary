import { LitElement, html } from 'lit';

class Prueba extends LitElement {
  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = 'World';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<p class="bg-red-500 text-7xl font-bold">Hello, ${this.name}!</p>`;
  }
}

customElements.define('my-component', Prueba);
