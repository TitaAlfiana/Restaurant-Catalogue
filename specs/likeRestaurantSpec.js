import FavoriteRestaurantIdb from '../src/scripts/data/fav-restaurant-IDB';
import * as TestFactories from './helpers/testFactories';


  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
describe('Liking A Resto', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the Resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the Resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this Resto"]')).toBeFalsy();
  });

  it('should be able to like the Resto', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestaurantIdb.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteResto(1);
  });

  it('should not add a Resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putResto({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteResto(1);
  });

  // menggunakan metode xit, bukan it
  it('should not add a Resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllResto()).toEqual([]);
  });
});
