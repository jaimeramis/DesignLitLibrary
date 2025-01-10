import { LitElement, html } from "lit";

class Navbar extends LitElement {
  static properties = {
    show: { type: Boolean },
    showComponents: { type: Boolean },
  };

  constructor() {
    super();
    this.show = false;
    this.showComponents = false;
  }

  toggleMenu() {
    this.show = !this.show;
  }

  toggleComponents() {
    this.showComponents = !this.showComponents;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <header>
        <nav>
          <div class="flex justify-between">
            <svg
              class="h-8 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 768 960"
            >
              <path
                d="M192 576l96-288 432 432-144 240-192-192h-96"
                fill="#00e8ff"
              />
              <path
                d="M384 768V384l192-192v384m-480 0h96l96 192-96 192L0 768z"
                fill="#283198"
                fill-rule="evenodd"
              />
              <path
                d="M192 576V192L384 0v384m192 576V576l192-192v384M0 768V384l192 192"
                fill="#324fff"
              />
              <path d="M192 960V576l192 192" fill="#0ff" />
            </svg>
            <div>
              <button
                @click="${this.toggleMenu}"
                class="-m-2.5 rounded-md p-2.5 text-gray-700 sm:hidden"
              >
                <span class="sr-only">${this.show ? "close" : "open"}</span>
                ${!this.show
                  ? html`<svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>`
                  : html`<svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>`}
              </button>
            </div>
          </div>

          <div
            class="${this.show
              ? ""
              : "hidden"} flex flex-col space-y-2 pt-10 sm:block"
          >
            <a
              href="#"
              target="_blank"
              class="block rounded px-2 py-2 font-bold transition-all duration-300 ease-in-out hover:bg-blue-200"
            >
              Home
            </a>
            <a
              href="#"
              target="_blank"
              class="block rounded px-2 py-2 font-bold transition-all duration-300 ease-in-out hover:bg-blue-200"
            >
              Installation Guide
            </a>

            <button
              @click="${this.toggleComponents}"
              class="flex w-full items-center rounded px-2 py-2 font-bold transition-all duration-300 ease-in-out hover:bg-blue-200"
            >
              <span>Components</span>
              <span class="pt-0.5">
                <svg
                  class="size-5 transform transition-transform duration-300"
                  style="transform: rotate(${this.showComponents ? 0 : 90}deg)"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    fill-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <div
              class="${this.showComponents
                ? "max-h-screen"
                : "max-h-0"} overflow-hidden transition-all duration-300 ease-in-out"
            >
              <a
                href="#"
                target="_blank"
                class="block rounded px-3 py-2 hover:text-blue-600"
              >
                Component 01
              </a>
              <a
                href="#"
                target="_blank"
                class="block rounded px-3 py-2 hover:text-blue-600"
              >
                Component 02
              </a>
              <a
                href="#"
                target="_blank"
                class="block rounded px-3 py-2 hover:text-blue-600"
              >
                Component 03
              </a>
              <a
                href="#"
                target="_blank"
                class="block rounded px-3 py-2 hover:text-blue-600"
              >
                Component 04
              </a>
            </div>

            <a
              href="https://www.linkedin.com/in/jaimeramisbarber/"
              target="_blank"
              class="block rounded px-2 py-2 font-bold transition-all duration-300 ease-in-out hover:bg-blue-200"
              >LinkedIn</a
            >
            <a
              href="https://github.com/jaimeramis/DesignLitLibrary.git"
              target="_blank"
              class="block rounded px-2 py-2 font-bold transition-all duration-300 hover:bg-blue-200"
              >Github</a
            >
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define("lt-navbar", Navbar);
