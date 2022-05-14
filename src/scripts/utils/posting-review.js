import RestaurantdbSource from '../data/restaurantdb-source';

const PostingReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  RestaurantdbSource.postRestaurant(dataInput);

  const reviewList = document.querySelector('.review-list');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
  <div class="review-card">
  <div class="identitas">
      <p>${name}</p>
      <p>${date}</p>
  </div>
  <div class="deskrip-review">
  ${review} 
  </div>
</div>
    `;
  reviewList.innerHTML += newReview;
};

export default PostingReview;
