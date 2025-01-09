import { LitElement, html } from "lit";

class Accordion extends LitElement {
  static properties = {
    openIndex: { type: Number },
    color: { type: String },
    title: { type: String },
    subtitle: { type: String },
    content: { type: String },
  };

  constructor() {
    super();
    this.openIndex = -1;
    this.color = "default";
    this.title = "Accordion title";
    this.subtitle = "Accordion subtitle";
    this.content = "Here you are gonna put the content...";
  }

  createRenderRoot() {
    return this;
  }

  toggleItem(index) {
    const previousIndex = this.openIndex;
    this.openIndex = this.openIndex === index ? -1 : index;

    this.updateComplete.then(() => {
      const sections = this.querySelectorAll(".accordion-content");
      sections.forEach((section, i) => {
        if (i === this.openIndex) {
          section.style.transition = "none";
          section.style.maxHeight = "none";
          const height = section.scrollHeight;
          section.style.maxHeight = "0";
          section.style.transition = "";
          requestAnimationFrame(() => {
            section.style.maxHeight = `${height}px`;
          });
        } else if (i === previousIndex) {
          section.style.maxHeight = "0";
        }
      });
    });
  }

  render() {
    const ColorClasses = {
      default: "text-white bg-gray-500 border-gray-500",
      blue: "text-white bg-sky-500 border-sky-500",
      green: "text-white bg-green-500 border-green-500",
      red: "text-white bg-red-500 border-red-500",
      orange: "text-white bg-orange-500 border-orange-500",
      none: "bg-inherit border-b border-gray-300",
    };

    const ColorClass = ColorClasses[this.color] || ColorClasses.default;

    return html`
      <div class="accordion-item border-b border-gray-300">
        <button class="w-full text-left px-6 py-4 ${ColorClass} hover:opacity-90 focus:outline-none flex justify-between items-center" @click="${() => this.toggleItem(0)}">
          <div>
            <h3 class="font-bold text-md sm:text-lg">${this.title}</h3>
            <h4 class="text-xs sm:text-sm">${this.subtitle}</h4>
          </div>
          <span class="transform transition-transform duration-300" style="transform: rotate(${this.openIndex === 0 ? 180 : 0}deg)">
            <svg class="w-3 h-3 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
            </svg>
          </span>
        </button>

        <div class="accordion-content overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0">
          <p class="px-6 py-4 text-xs sm:text-sm">${this.content}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("lt-accordion", Accordion);
