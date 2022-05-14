class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav" id="nav">
    <div class="logo-apps">
        <a href="#/home" style="padding: 0;"> <img src="" alt="Logo" class="logo"></a>
    </div>
    <div class="hamburger">
       <button id="menu" class="header__menu" aria-label="see menu">☰</button> 
    </div>
    <div class="nav-list-container">
        <ul class="nav-list">
            <li class="nav-item"><a href="/" class="active nav-link" id="active">Home</a></li>
            <li class="nav-item"><a href="#/favorite" class="nav-link">Favorite</a></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/tita-alfiana-26b091172" class="nav-link">About Us</a></li>
        </ul>
    </div>
</nav>`;
  }
}

customElements.define('app-bar', appBar);
