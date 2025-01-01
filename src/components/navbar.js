import { LitElement, html } from "lit";

class Navbar extends LitElement {
  static properties = {
    show: { type: Boolean },
  };

  constructor() {
    super();
    this.show = false; // Inicialmente el menú está oculto
  }

  toggleMenu() {
    this.show = !this.show; // Alterna el valor de 'show' entre true/false
  }

  createRenderRoot() {
    return this; // Opcional, para deshabilitar el shadow DOM
  }

  render() {
    return html`
      <header>
        <nav>
          <div class="flex justify-between">
            <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            <div>
              <button @click="${this.toggleMenu}" class="-m-2.5 rounded-md p-2.5 text-gray-700 sm:hidden">
                <span class="sr-only">${this.show ? "close" : "open"}</span>
                ${!this.show
                  ? html` <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>`
                  : html` <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>`}
              </button>
            </div>
          </div>

          <!-- Menu Content -->
          <div class="pt-10 ${this.show ? "" : "hidden"} sm:block">
            <ul>
              <li class="mb-5 bg-blue-200"><b>01</b> Hover, focus, and other states</li>
              <li class="mb-5 bg-blue-200"><b>02</b> Hover, focus, and other states</li>
              <li class="mb-5 bg-blue-200"><b>03</b> Hover, focus, and other states</li>
              <li class="mb-5 bg-blue-200"><b>04</b> Hover, focus, and other states</li>
            </ul>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define("nav-bar", Navbar);
