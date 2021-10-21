import { ColorProps, SpaceProps } from 'https://unpkg.com/@rajasegar/styled-web-components@2.0.2/dist/styled-web-components.min.js'

export class FWBox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML =
      '<style>:host { display: block; } </style><slot></slot>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('fw-box', ColorProps(SpaceProps(FWBox)))
