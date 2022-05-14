class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container-hero">
    <div class="hero" id="hero"></div>
    <div class="hero__inner">
        <h1 class="hero__title">Explore Your Taste, Find Your <span style="border-bottom: 4px solid #e8002e;">Favorite</span></h1>
        <p class="hero__tagline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
    </div>
</div>
      `;
  }
}

customElements.define('hero-content', Hero);
