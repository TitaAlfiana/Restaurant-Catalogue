/* eslint-disable no-undef */
import urlParser from '../../routes/url-parser';
import restauranSource from '../../data/restaurantdb-source';
import { creatRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-initiator';
import PostingReview from '../../utils/posting-review';
import LoadingPage from '../templates/load-page';
import FavoriteRestaurantIdb from '../../data/fav-restaurant-IDB';

const Detail = {
  async render() {
    return `
    <div class="container" id="detail">
      <div id="loadingPage"></div>
      <div id="main">
        <h1 class="title-list-detail">Detail <span style="color: #E42A4F;">Restaurant</span></h1>
        <hr style="width: 80%;">
        <div class="detail-page" id="detail-page"></div>
        <div class="form">
        <h2 style="font-weight: bold; margin-bottom:8px;">Share your experience about this place</h2>
          <form>
              <div class="mb-3">
                <label for="inputName" class="form-label">Name</label>
                <input name="Nameinput" type="text" class="form-control" id="inputName" aria-label="input name">
              </div>
              <div class="mb-3">
                <label for="inputReview" class="form-label">Review</label>
                <input name="Reviewinput" type="text" class="form-control" id="inputReview" aria-label="input review">
              </div>
              <button id="submit-review" type="submit" class="btn" aria-label="submit your review">Submit</button>
            </form>
        </div>
        <div id="likeButtonContainer"></div>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#detail-page');
    const loading = document.querySelector('#loadingPage');
    const mainContent = document.querySelector('#main');
    loading.innerHTML = LoadingPage();
    mainContent.style.display = 'none';

    try {
      const detailresto = await restauranSource.detailRestaurant(url.id);
      restoContainer.innerHTML += creatRestoDetailTemplate(detailresto.restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        resto: {
          id: detailresto.restaurant.id,
          name: detailresto.restaurant.name,
          description: detailresto.restaurant.description,
          pictureId: detailresto.restaurant.pictureId,
          rating: detailresto.restaurant.rating,
          city: detailresto.restaurant.city,
        },
      });
      mainContent.style.display = 'block';
      loading.style.display = 'none';
    } catch (e) {
      restoContainer.innerHTML = `Error : ${e}, refresh please !`;
      mainContent.style.display = 'block';
      loading.style.display = 'none';
    }

    const btn = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' || reviewInput.value === '') {
        // eslint-disable-next-line no-alert
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostingReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
