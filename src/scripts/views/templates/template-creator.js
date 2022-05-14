/* eslint-disable max-len */
/* eslint-disable no-shadow */
import CONFIG from '../../globals/config';

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <a id="anchor">
      <div class="card">
          <div class="resto__header">
              <img data-src="./images/picture/placeholder.png" alt="" class="resto1 lazyload">
          </div>
          <div class="deskrip">
              <h2 class="skeleton namee">Lorem ipsum dolor sit</h2>
              <p class="skeleton paragraf">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut</p>
          </div>
      </div>
  </a>
  `;
  }
  return template;
};

const createRestoItemTemplate = (data) => `
<a href="#/detail/${data.id}" id="anchor">
    <div class="card">
        <div class="resto__header">
            <img data-src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}" class="resto1 lazyload">
                <div class="resto__header__rating">
                    <p>⭐️<span class="resto__header__rating__score">${data.rating}</span></p>
                </div>
        </div>
        <div class="deskrip">
            <h2 class="namee">${data.name}</h2>
            <h3 class="location"><img src="./images/icn/map.png" alt="icon map" width="20">  ${data.city}</h3>
            <p class="paragraf">${data.description.slice(0, 170) + (data.description.length > 170 ? ' . . .' : '')}</p>
        </div>
    </div>
</a>`;

const creatRestoDetailTemplate = (detail) => `
<div class="picture-descript">
<div class="picture">
  <picture>
    <source srcset="${CONFIG.BASE_IMAGE_URL_SM + detail.pictureId}" type="image/webp" media="all and (max-width: 600px)" />        
    <source srcset="${CONFIG.BASE_IMAGE_URL_SM + detail.pictureId}" type="image/jpeg" media="all and (max-width: 600px)" />
    <source srcset="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" type="image/webp" media="all and (min-width: 601px) and (max-width: 960px)" />    
    <source srcset="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" type="image/jpeg" media="all and (min-width: 601px) and (max-width: 960px)" />
    <source srcset="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" type="image/webp" media="all and (min-width: 961px)" />        
    <source srcset="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" type="image/jpeg" media="all and (min-width: 961px)" />
    <img data-src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" alt="${detail.name}" class="img lazyload"/>
  </picture>
</div>
<div class="descript-menu">
    <ul class="detail-deskrip">
        <li><h2 class="header2"><span><img src="./images/icn/store.png" alt="icon-store" class="icon">  ${detail.name}</span></h2></li>
        <li><h2 class="header2"><span><img src="./images/icn/map2.png" alt="icon-map" class="icon">  ${detail.address}, ${detail.city}</span></h2></li>
        <li><h2 class="header2"><span>⭐️ ${detail.rating}</span></h2></li>
        <hr>
        <h2 class="header2">Categories</h2>
        
        ${detail.categories.map((category) => `
                <h2 class="categories">${category.name}</h2>
              `).join('')}
    </ul>
</div>
</div>
<div class="menu">
<div class="container-des">
<div class="detail">
     <h1>Welcome To ${detail.name}</h1>
    <p>${detail.description}</p>
    <img src="${'./images/picture/line.png'}" alt="accessoris" class="line">
</div></div>

<div class="menu-list">
    <div class="food">
        <div class="picture-food-container"> <img data-src="./images/picture/food.png" alt="food" class="picture-food lazyload"></div>
        <div class="food-list">
            <h2 class="header2" >FOOD</h2>
            <ul class="list">
            ${detail.menus.foods
    .map(
      (food) => `
                    <li>${food.name}</li>
                  `,
    )
    .join('')}
        </ul></div>
    </div>
    <div class="drink">
        <div class="drink-list">
            <h2 class="header2">DRINK</h2>
            <ul class="list">
            ${detail.menus.drinks
    .map(
      (drink) => `
                    <li>${drink.name}</li>
                  `,
    )
    .join('')}
        </ul></div>
        <div class="picture-drink-container"> <img data-src="./images/picture/drink.png" alt="drink" class="picture-drink lazyload"></div>
    </div>
</div>
</div>
<div class="review">
<h2 style="font-weight: bold; margin-bottom:8px;">Review</h2>

<div class="review-list">
${detail.customerReviews
    .map(
      (review) => `
        <div class="review-card">
        <div class="identitas">
            <p>${review.name}</p>
            <p>${review.date}</p>
        </div>
        <div class="deskrip-review">
        ${review.review} 
        </div>
    </div>
      `,
    )
    .join('')}
</div>
`;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
  <i aria-hidden="true"><img src="./images/icn/unlike.png" alt="icon-like"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
  <i aria-hidden="true"><img src="./images/icn/like.png" alt="icon-unlike"></i>
  </button>
`;

export {
  createSkeletonRestaurantTemplate, createRestoItemTemplate, creatRestoDetailTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate,
};
