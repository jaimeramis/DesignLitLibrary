import { LitElement, html } from "lit";

class Button extends LitElement {
  static properties = {
    label: { type: String },
    color: { type: String },
    size: { type: String },
    rounded: { type: String },
  };

  constructor() {
    super();
    this.label = "I am a button";
    this.color = "default";
    this.size = "medium";
    this.rounded = "medium";
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const sizeClasses = {
      small: "text-sm",
      medium: "text-md",
      large: "text-lg",
    };

    const colorClasses = {
      default: "text-white bg-gray-500 border-gray-500 border-2",
      blue: "text-white bg-sky-500 border-sky-500 border-2",
      green: "text-white bg-green-500 border-green-500 border-2",
      red: "text-white bg-red-500 border-red-500 border-2",
      orange: "text-white bg-orange-500 border-orange-500 border-2",
    };

    const roundedClasses = {
      full: "rounded-full",
      medium: "rounded-md",
      none: "rounded-none",
    };

    const size = "py-2 px-5 " + (sizeClasses[this.size] || "");
    const color = colorClasses[this.color] || colorClasses.default;
    const rounded = roundedClasses[this.rounded] || "rounded-md";

    return html`<button
      class="${size} ${color} ${rounded} w-full transform align-middle transition duration-100 ease-in-out active:scale-90"
    >
      ${this.label}
    </button> `;
  }
}

customElements.define("lt-button", Button);
