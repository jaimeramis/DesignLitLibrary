import { LitElement, html } from "lit";

class Navbar extends LitElement {
  static properties = {
    show: { type: Boolean },
    showComponents: { type: Boolean }, // Nueva propiedad para controlar la visibilidad de los componentes
  };

  constructor() {
    super();
    this.show = false; // Inicialmente el menú está oculto
    this.showComponents = false; // Los componentes están ocultos inicialmente
  }

  toggleMenu() {
    this.show = !this.show; // Alterna el valor de 'show' entre true/false
  }

  toggleComponents() {
    this.showComponents = !this.showComponents; // Alterna el valor de 'showComponents' entre true/false
  }

  createRenderRoot() {
    return this; // Opcional, para deshabilitar el shadow DOM
  }

  render() {
    return html`
      <header>
        <nav>
          <div class="flex justify-between">
            <svg class="h-8 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 960">
              <path d="M192 576l96-288 432 432-144 240-192-192h-96" fill="#00e8ff" />
              <path d="M384 768V384l192-192v384m-480 0h96l96 192-96 192L0 768z" fill="#283198" fill-rule="evenodd" />
              <path d="M192 576V192L384 0v384m192 576V576l192-192v384M0 768V384l192 192" fill="#324fff" />
              <path d="M192 960V576l192 192" fill="#0ff" />
            </svg>
            <div>
              <button @click="${this.toggleMenu}" class="-m-2.5 p-2.5 rounded-md sm:hidden text-gray-700">
                <span class="sr-only">${this.show ? "close" : "open"}</span>
                ${!this.show
                  ? html`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>`
                  : html`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>`}
              </button>
            </div>
          </div>

          <!-- Menu Content -->
          <div class="flex flex-col ${this.show ? "" : "hidden"} pt-10 sm:block space-y-2">
            <a href="#" target="_blank" class="block font-bold hover:bg-blue-200 px-2 py-2 rounded transition-all duration-300 ease-in-out"> Home </a>
            <a href="#" target="_blank" class="block font-bold hover:bg-blue-200 px-2 py-2 rounded transition-all duration-300 ease-in-out"> Installation Guide </a>

            <!-- Botón para alternar la visibilidad de los componentes -->
            <button @click="${this.toggleComponents}" class="flex font-bold hover:bg-blue-200 items-center px-2 py-2 rounded transition-all w-full duration-300 ease-in-out">
              <span>Components</span>
              <svg class="flex-none size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path
                  clip-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd" />
              </svg>
            </button>

            <!-- Contenido de los componentes, visible cuando 'showComponents' es true -->
            <div class="overflow-hidden ${this.showComponents ? "max-h-screen" : "max-h-0"} transition-all duration-300 ease-in-out">
              <a href="#" target="_blank" class="block hover:text-blue-600 px-3 py-2 rounded"> Component 01 </a>
              <a href="#" target="_blank" class="block hover:text-blue-600 px-3 py-2 rounded"> Component 02 </a>
              <a href="#" target="_blank" class="block hover:text-blue-600 px-3 py-2 rounded"> Component 03 </a>
              <a href="#" target="_blank" class="block hover:text-blue-600 px-3 py-2 rounded"> Component 04 </a>
            </div>

            <a href="https://www.linkedin.com/in/jaimeramisbarber/" target="_blank" class="block font-bold hover:bg-blue-200 px-2 py-2 rounded transition-all duration-300 ease-in-out">LinkedIn</a>
            <a href="https://github.com/jaimeramis/DesignLitLibrary.git" target="_blank" class="block font-bold hover:bg-blue-200 px-2 py-2 rounded transition-all duration-300">Github</a>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define("lt-navbar", Navbar);
