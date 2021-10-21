import { ColorProps, SpaceProps } from '@rajasegar/styled-web-components'

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
