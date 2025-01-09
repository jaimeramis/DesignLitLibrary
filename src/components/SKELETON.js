import { LitElement, html } from "lit";

class Button extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html` <h4>Soy un BOTON</h4> `;
  }
}

customElements.define("lt-button", Button);
