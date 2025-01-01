import { LitElement, html } from "lit";

class Prueba extends LitElement {
  static properties = {
    name: { type: String },
  };

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<p class="pt-20 sm:pt-0 text-left font-bold">
        Por defecto, en dispositivos pequeños (640px), no se aplicará h-full, y las columnas adoptarán su altura natural basada en el contenido.
      </p>
      <p class=" text-left">
        Use these Tailwind CSS multi-column examples to build interfaces with multiple columns, such as email inboxes, project management software, or interfaces with nested menus or setting screens.
        These layouts are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts. All layouts are fully responsive and optimized for desktop, tablet, and
        mobile screen sizes.
      </p>`;
  }
}

customElements.define("my-component", Prueba);
