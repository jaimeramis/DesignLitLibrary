import { LitElement, html } from "lit";

class Link extends LitElement {
  static properties = {
    label: { type: String },
    color: { type: String },
    size: { type: String },
    variant: { type: String },
  };

  constructor() {
    super();
    this.label = "I am a link";
    this.color = "default";
    this.size = "medium";
    this.variant = "";
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

    const variantClasses = {
      bold: "font-bold",
      italic: "italic",
    };

    const colorClasses = {
      default: "text-gray-500 hover:border-b hover:border-gray-500",
      blue: "text-sky-500 hover:border-b hover:border-sky-500",
      green: "text-green-500 hover:border-b hover:border-green-500",
      red: "text-red-500 hover:border-b hover:border-red-500",
      orange: "text-orange-500 hover:border-b hover:border-orange-500",
    };

    const size = sizeClasses[this.size] || sizeClasses.default;
    const variant = variantClasses[this.variant] || variantClasses.default;
    const color = colorClasses[this.color] || colorClasses.default;

    return html`
      <a
        href="#"
        target="_blank"
        class="${variant} ${color} ${size} inline-block align-middle duration-150 ease-in-out"
        >${this.label}</a
      >
    `;
  }
}

customElements.define("lt-link", Link);
