import { SpaceProps, ColorProps } from "@rajasegar/styled-web-components";

export class FWHeading extends HTMLElement {
  static get observedAttributes() {
    return ["level"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = "";
    const template = document.createElement("template");
    this.level = this.getAttribute("level");
    const heading = "h" + this.getAttribute("level");
    template.innerHTML = "<" + heading + "><slot></slot></" + heading + ">";
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.heading = this.shadowRoot.querySelector(heading);
    this.applyStyles();
  }

  attributeChangedCallback(attr) {
    if (attr === "level") {
      this.render();
    }
    if (attr === "color") {
      this.applyStyles();
    }
  }

  applyStyles() {
    this.heading.style.color = this.getAttribute("color");
  }
}

customElements.define("fw-heading", SpaceProps(ColorProps(FWHeading)));
