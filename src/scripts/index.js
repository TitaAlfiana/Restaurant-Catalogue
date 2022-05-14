import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/app-bar';
import './components/hero-content';
import './components/footer-content';
import logo from '../public/logo/Logo-bar.png';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

window.addEventListener('load', () => {
  document.querySelector('.logo').setAttribute('src', logo);
});

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.nav-list-container'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
