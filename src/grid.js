import { GridProps } from '@rajasegar/styled-web-components'

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
