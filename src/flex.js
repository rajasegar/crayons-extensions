import { SpaceProps, FlexboxProps } from "@rajasegar/styled-web-components";

export class FWFlex extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML =
      "<style>:host { display: flex; } </style><slot></slot>";
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("fw-flex", SpaceProps(FlexboxProps(FWFlex)));
