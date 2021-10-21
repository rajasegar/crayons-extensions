import { GridProps } from 'https://unpkg.com/@rajasegar/styled-web-components@2.0.2/dist/styled-web-components.min.js'

export class FWGrid extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = '<style>:host { display: grid; }</style><slot></slot>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('fw-grid', GridProps(FWGrid))
