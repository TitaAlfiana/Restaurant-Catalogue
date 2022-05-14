import FavoriteRestaurantIdb from '../../data/fav-restaurant-IDB';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="restaurant">
        <h2 class="title-list">Favorite <span style="color: #E42A4F;">Restaurant</span></h2>
        <hr style="width: 80%;">
        <div id="list-restaurant">
        
        </div>
    </div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllResto();
    const restoContainer = document.querySelector('#list-restaurant');
    if (resto.length === 0) {
      restoContainer.innerHTML = 'You dont have any Favorite Restaurant';
    }
    resto.forEach((data) => {
      restoContainer.innerHTML += createRestoItemTemplate(data);
    });
  },
};

export default Like;
