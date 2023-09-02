class Header extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    render() {
        this.innerHTML = `
        <h1>hello</h1>
        `
    }
}

customElements.define('custom-header', Header)