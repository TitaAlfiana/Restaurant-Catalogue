import restauranSource from '../../data/restaurantdb-source';
import { createRestoItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';
import LoadingPage from '../templates/load-page';

const Home = {
  async render() {
    return `
    <div class="restaurant">
      <div id="loadingPage"></div>
      <div id="main">
          <h2 class="title-list">List <span style="color: #E42A4F;">Restaurant</span></h2>
          <hr style="width: 80%;">
          <div id="list-restaurant">
          ${createSkeletonRestaurantTemplate(20)}
          </div>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('#loadingPage');
    const mainContent = document.querySelector('#main');
    loading.innerHTML = LoadingPage();
    mainContent.style.display = 'none';
    const restoContainer = document.querySelector('#list-restaurant');

    try {
      const resto = await restauranSource.listRestaurant();
      const total = resto.restaurants;
      restoContainer.innerHTML = '';
      total.forEach((data) => {
        restoContainer.innerHTML += createRestoItemTemplate(data);
      });
      mainContent.style.display = 'block';
      loading.style.display = 'none';
    } catch (e) {
      mainContent.style.display = 'block';
      loading.style.display = 'none';
      restoContainer.innerHTML = `Error : ${e}, refresh please !`;
    }
  },

};

export default Home;
