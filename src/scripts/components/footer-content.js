class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <div class="footer web">
        <p style="color: #ffffff;">Copyright &#169; 2022 - Foodie</p></div>
    </footer>
      `;
  }
}

customElements.define('footer-content', FooterContent);
