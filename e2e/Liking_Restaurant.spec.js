const assert = require('assert');

Feature('Liking Resto');

Before((I) => {
    I.amOnPage('/#/favorite');
  });

Scenario('showing empty favorite restaurant', (I) => {
    I.seeElement('#list-restaurant');
    I.see("You dont have any Favorite Restaurant", '#list-restaurant');
});
Scenario('liking one restaurant', async (I) => {
    I.see("You dont have any Favorite Restaurant", '#list-restaurant');
  
    I.amOnPage('/');
  
    I.seeElement('a .card');
    const firstCrd = locate('.namee').first();
    const firstCardTitle = await I.grabTextFrom(firstCrd);
    I.click(firstCrd);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/favorite');
    I.seeElement('.card');
    const likedCardTitle = await I.grabTextFrom('.namee');
  
    assert.strictEqual(firstCardTitle, likedCardTitle);
  });

  Scenario('Customer review', async (I) => {
    I.see("You dont have any Favorite Restaurant", '#list-restaurant');
  
    I.amOnPage('/');
  
    I.seeElement('a .card');
    I.click(locate('a .card').first());
  
    I.seeElement('.form form');
  
    const textReview = 'Tidak rekomendasi untuk mahasiswa!';
    I.fillField('Nameinput', 'tita');
    I.fillField('Reviewinput', textReview);
  
    I.click('#submit-review');
  
    const lastReview = locate('.deskrip-review').last();
    const textLastReview = await I.grabTextFrom(lastReview);
  
    assert.strictEqual(textReview, textLastReview);
  });