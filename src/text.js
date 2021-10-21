import { ColorProps, TypographyProps } from '@rajasegar/styled-web-components'

export class FWText extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = ''
    const template = document.createElement('template')
    template.innerHTML = '<style>:host { display: block; }</style><slot></slot>'
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('fw-text', ColorProps(TypographyProps(FWText)))
