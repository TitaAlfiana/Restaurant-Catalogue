!function(n){function r(r){for(var t,o,s=r[0],c=r[1],d=r[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(l&&l(r);p.length;)p.shift()();return a.push.apply(a,d||[]),e()}function e(){for(var n,r=0;r<a.length;r++){for(var e=a[r],t=!0,s=1;s<e.length;s++){var c=e[s];0!==i[c]&&(t=!1)}t&&(a.splice(r--,1),n=o(o.s=e[0]))}return n}var t={},i={0:0},a=[];function o(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=t,o.d=function(n,r,e){o.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,r){if(1&r&&(n=o(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)o.d(e,t,function(r){return n[r]}.bind(null,t));return e},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var d=0;d<s.length;d++)r(s[d]);var l=c;a.push([24,3,2,1]),e()}([,,,,,,,,function(n,r,e){"use strict";var t=e(9),i=e.n(t);function a(n,r,e,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,i)}var o=function(){var n,r=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,i.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,i){var o=n.apply(r,e);function s(n){a(o,t,i,s,c,"next",n)}function c(n){a(o,t,i,s,c,"throw",n)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();r.a=o},,function(n,r,e){"use strict";var t={init:function(n){var r=this,e=n.button,t=n.drawer;e.addEventListener("click",(function(n){r._toggleDrawer(n,t)})),t.addEventListener("click",(function(n){r._closeDrawer(n,t)}))},_toggleDrawer:function(n,r){n.stopPropagation(),r.classList.toggle("open")},_closeDrawer:function(n,r){n.stopPropagation(),r.classList.remove("open")}},i={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),r=this._urlSplitter(n);return this._urlCombiner(r)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var r=n.split("/");return{resource:r[1]||null,id:r[2]||null,verb:r[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},a=e(1),o=e(0),s=function(n){for(var r="",e=0;e<n;e+=1)r+='\n      <a id="anchor">\n      <div class="card">\n          <div class="resto__header">\n              <img data-src="./images/picture/placeholder.png" alt="" class="resto1 lazyload">\n          </div>\n          <div class="deskrip">\n              <h2 class="skeleton namee">Lorem ipsum dolor sit</h2>\n              <p class="skeleton paragraf">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut</p>\n          </div>\n      </div>\n  </a>\n  ';return r},c=function(n){return'\n<a href="#/detail/'.concat(n.id,'" id="anchor">\n    <div class="card">\n        <div class="resto__header">\n            <img data-src="').concat(o.a.BASE_IMAGE_URL+n.pictureId,'" alt="').concat(n.name,'" class="resto1 lazyload">\n                <div class="resto__header__rating">\n                    <p>⭐️<span class="resto__header__rating__score">').concat(n.rating,'</span></p>\n                </div>\n        </div>\n        <div class="deskrip">\n            <h2 class="namee">').concat(n.name,'</h2>\n            <h3 class="location"><img src="./images/icn/map.png" alt="icon map" width="20">  ').concat(n.city,'</h3>\n            <p class="paragraf">').concat(n.description.slice(0,170)+(n.description.length>170?" . . .":""),"</p>\n        </div>\n    </div>\n</a>")},d=function(){return'\n<div class="loading-template">\n    <div class="loadingio-spinner-spinner-pavh03kq49"><div class="ldio-5jueiv32ufk">\n    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n    </div></div>\n    \n</div>\n'};function l(n,r,e,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,i)}function u(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var a=n.apply(r,e);function o(n){l(a,t,i,o,s,"next",n)}function s(n){l(a,t,i,o,s,"throw",n)}o(void 0)}))}}var p={render:function(){return u(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div class="restaurant">\n      <div id="loadingPage"></div>\n      <div id="main">\n          <h2 class="title-list">List <span style="color: #E42A4F;">Restaurant</span></h2>\n          <hr style="width: 80%;">\n          <div id="list-restaurant">\n          '.concat(s(20),"\n          </div>\n      </div>\n    </div>\n      "));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return u(regeneratorRuntime.mark((function n(){var r,e,t,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=document.querySelector("#loadingPage"),e=document.querySelector("#main"),r.innerHTML=d(),e.style.display="none",t=document.querySelector("#list-restaurant"),n.prev=5,n.next=8,a.a.listRestaurant();case 8:i=n.sent,o=i.restaurants,t.innerHTML="",o.forEach((function(n){t.innerHTML+=c(n)})),e.style.display="block",r.style.display="none",n.next=21;break;case 16:n.prev=16,n.t0=n.catch(5),e.style.display="block",r.style.display="none",t.innerHTML="Error : ".concat(n.t0,", refresh please !");case 21:case"end":return n.stop()}}),n,null,[[5,16]])})))()}};function f(n,r,e,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,i)}function m(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var a=n.apply(r,e);function o(n){f(a,t,i,o,s,"next",n)}function s(n){f(a,t,i,o,s,"throw",n)}o(void 0)}))}}var v={init:function(n){var r=this;return m(regeneratorRuntime.mark((function e(){var t,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.likeButtonContainer,i=n.favoriteRestaurants,a=n.resto,r._likeButtonContainer=t,r._resto=a,r._favoriteRestaurants=i,e.next=6,r._renderButton();case 6:case"end":return e.stop()}}),e)})))()},_renderButton:function(){var n=this;return m(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n._resto.id,r.next=3,n._isRestoExist(e);case 3:if(!r.sent){r.next=7;break}n._renderLiked(),r.next=8;break;case 7:n._renderLike();case 8:case"end":return r.stop()}}),r)})))()},_isRestoExist:function(n){var r=this;return m(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._favoriteRestaurants.getResto(n);case 2:return t=e.sent,e.abrupt("return",!!t);case 4:case"end":return e.stop()}}),e)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this resto" id="likeButton" class="like">\n  <i aria-hidden="true"><img src="./images/icn/unlike.png" alt="icon-like"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",m(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n._favoriteRestaurants.putResto(n._resto);case 2:n._renderButton();case 3:case"end":return r.stop()}}),r)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this resto" id="likeButton" class="like">\n  <i aria-hidden="true"><img src="./images/icn/like.png" alt="icon-unlike"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",m(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n._favoriteRestaurants.deleteResto(n._resto.id);case 2:n._renderButton();case 3:case"end":return r.stop()}}),r)}))))}},g=function(n,r,e){var t={id:n.id,name:r,review:e};a.a.postRestaurant(t);var i=document.querySelector(".review-list"),o=(new Date).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}),s='\n  <div class="review-card">\n  <div class="identitas">\n      <p>'.concat(r,"</p>\n      <p>").concat(o,'</p>\n  </div>\n  <div class="deskrip-review">\n  ').concat(e," \n  </div>\n</div>\n    ");i.innerHTML+=s},h=e(2);function x(n,r,e,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,i)}function b(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var a=n.apply(r,e);function o(n){x(a,t,i,o,s,"next",n)}function s(n){x(a,t,i,o,s,"throw",n)}o(void 0)}))}}function w(n,r,e,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,i)}function y(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var a=n.apply(r,e);function o(n){w(a,t,i,o,s,"next",n)}function s(n){w(a,t,i,o,s,"throw",n)}o(void 0)}))}}var k={"/":p,"/detail/:id":{render:function(){return b(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div class="container" id="detail">\n      <div id="loadingPage"></div>\n      <div id="main">\n        <h1 class="title-list-detail">Detail <span style="color: #E42A4F;">Restaurant</span></h1>\n        <hr style="width: 80%;">\n        <div class="detail-page" id="detail-page"></div>\n        <div class="form">\n        <h2 style="font-weight: bold; margin-bottom:8px;">Share your experience about this place</h2>\n          <form>\n              <div class="mb-3">\n                <label for="inputName" class="form-label">Name</label>\n                <input name="Nameinput" type="text" class="form-control" id="inputName" aria-label="input name">\n              </div>\n              <div class="mb-3">\n                <label for="inputReview" class="form-label">Review</label>\n                <input name="Reviewinput" type="text" class="form-control" id="inputReview" aria-label="input review">\n              </div>\n              <button id="submit-review" type="submit" class="btn" aria-label="submit your review">Submit</button>\n            </form>\n        </div>\n        <div id="likeButtonContainer"></div>\n      </div>\n    </div>\n      ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return b(regeneratorRuntime.mark((function n(){var r,e,t,s,c,l,u,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.parseActiveUrlWithoutCombiner(),e=document.querySelector("#detail-page"),t=document.querySelector("#loadingPage"),s=document.querySelector("#main"),t.innerHTML=d(),s.style.display="none",n.prev=6,n.next=9,a.a.detailRestaurant(r.id);case 9:c=n.sent,e.innerHTML+=(f=c.restaurant,'\n<div class="picture-descript">\n<div class="picture">\n  <picture>\n    <source srcset="'.concat(o.a.BASE_IMAGE_URL_SM+f.pictureId,'" type="image/webp" media="all and (max-width: 600px)" />        \n    <source srcset="').concat(o.a.BASE_IMAGE_URL_SM+f.pictureId,'" type="image/jpeg" media="all and (max-width: 600px)" />\n    <source srcset="').concat(o.a.BASE_IMAGE_URL+f.pictureId,'" type="image/webp" media="all and (min-width: 601px) and (max-width: 960px)" />    \n    <source srcset="').concat(o.a.BASE_IMAGE_URL+f.pictureId,'" type="image/jpeg" media="all and (min-width: 601px) and (max-width: 960px)" />\n    <source srcset="').concat(o.a.BASE_IMAGE_URL+f.pictureId,'" type="image/webp" media="all and (min-width: 961px)" />        \n    <source srcset="').concat(o.a.BASE_IMAGE_URL+f.pictureId,'" type="image/jpeg" media="all and (min-width: 961px)" />\n    <img data-src="').concat(o.a.BASE_IMAGE_URL+f.pictureId,'" alt="').concat(f.name,'" class="img lazyload"/>\n  </picture>\n</div>\n<div class="descript-menu">\n    <ul class="detail-deskrip">\n        <li><h2 class="header2"><span><img src="./images/icn/store.png" alt="icon-store" class="icon">  ').concat(f.name,'</span></h2></li>\n        <li><h2 class="header2"><span><img src="./images/icn/map2.png" alt="icon-map" class="icon">  ').concat(f.address,", ").concat(f.city,'</span></h2></li>\n        <li><h2 class="header2"><span>⭐️ ').concat(f.rating,'</span></h2></li>\n        <hr>\n        <h2 class="header2">Categories</h2>\n        \n        ').concat(f.categories.map((function(n){return'\n                <h2 class="categories">'.concat(n.name,"</h2>\n              ")})).join(""),'\n    </ul>\n</div>\n</div>\n<div class="menu">\n<div class="container-des">\n<div class="detail">\n     <h1>Welcome To ').concat(f.name,"</h1>\n    <p>").concat(f.description,'</p>\n    <img src="',"./images/picture/line.png",'" alt="accessoris" class="line">\n</div></div>\n\n<div class="menu-list">\n    <div class="food">\n        <div class="picture-food-container"> <img data-src="./images/picture/food.png" alt="food" class="picture-food lazyload"></div>\n        <div class="food-list">\n            <h2 class="header2" >FOOD</h2>\n            <ul class="list">\n            ').concat(f.menus.foods.map((function(n){return"\n                    <li>".concat(n.name,"</li>\n                  ")})).join(""),'\n        </ul></div>\n    </div>\n    <div class="drink">\n        <div class="drink-list">\n            <h2 class="header2">DRINK</h2>\n            <ul class="list">\n            ').concat(f.menus.drinks.map((function(n){return"\n                    <li>".concat(n.name,"</li>\n                  ")})).join(""),'\n        </ul></div>\n        <div class="picture-drink-container"> <img data-src="./images/picture/drink.png" alt="drink" class="picture-drink lazyload"></div>\n    </div>\n</div>\n</div>\n<div class="review">\n<h2 style="font-weight: bold; margin-bottom:8px;">Review</h2>\n\n<div class="review-list">\n').concat(f.customerReviews.map((function(n){return'\n        <div class="review-card">\n        <div class="identitas">\n            <p>'.concat(n.name,"</p>\n            <p>").concat(n.date,'</p>\n        </div>\n        <div class="deskrip-review">\n        ').concat(n.review," \n        </div>\n    </div>\n      ")})).join(""),"\n</div>\n")),v.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),favoriteRestaurants:h.a,resto:{id:c.restaurant.id,name:c.restaurant.name,description:c.restaurant.description,pictureId:c.restaurant.pictureId,rating:c.restaurant.rating,city:c.restaurant.city}}),s.style.display="block",t.style.display="none",n.next=21;break;case 16:n.prev=16,n.t0=n.catch(6),e.innerHTML="Error : ".concat(n.t0,", refresh please !"),s.style.display="block",t.style.display="none";case 21:l=document.querySelector("#submit-review"),u=document.querySelector("#inputName"),p=document.querySelector("#inputReview"),l.addEventListener("click",(function(n){n.preventDefault(),""===u.value||""===p.value?(alert("Inputan tidak boleh ada yang kosong"),u.value="",p.value=""):(g(r,u.value,p.value),u.value="",p.value="")}));case 25:case"end":return n.stop()}var f}),n,null,[[6,16]])})))()}},"/favorite":{render:function(){return y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div class="restaurant">\n        <h2 class="title-list">Favorite <span style="color: #E42A4F;">Restaurant</span></h2>\n        <hr style="width: 80%;">\n        <div id="list-restaurant">\n        \n        </div>\n    </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return y(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.getAllResto();case 2:r=n.sent,e=document.querySelector("#list-restaurant"),0===r.length&&(e.innerHTML="You dont have any Favorite Restaurant"),r.forEach((function(n){e.innerHTML+=c(n)}));case 6:case"end":return n.stop()}}),n)})))()}}};function _(n,r,e,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,i)}function R(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var S=function(){function n(r){var e=r.button,t=r.drawer,i=r.content;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=e,this._drawer=t,this._content=i,this._initialAppShell()}var r,e,a,o,s;return r=n,(e=[{key:"_initialAppShell",value:function(){t.init({button:this._button,drawer:this._drawer})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=i.parseActiveUrlWithCombiner(),e=k[r],n.next=4,e.render();case 4:return this._content.innerHTML=n.sent,n.next=7,e.afterRender();case 7:document.querySelector(".skip-link").addEventListener("click",(function(n){n.preventDefault(),document.querySelector("#mainContent").focus()}));case 9:case"end":return n.stop()}}),n,this)})),s=function(){var n=this,r=arguments;return new Promise((function(e,t){var i=o.apply(n,r);function a(n){_(i,e,t,a,s,"next",n)}function s(n){_(i,e,t,a,s,"throw",n)}a(void 0)}))},function(){return s.apply(this,arguments)})}])&&R(r.prototype,e),a&&R(r,a),n}();r.a=S},function(n,r,e){"use strict";function t(n,r,e,t,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,i)}function i(n){return function(){var r=this,e=arguments;return new Promise((function(i,a){var o=n.apply(r,e);function s(n){t(o,i,a,s,c,"next",n)}function c(n){t(o,i,a,s,c,"throw",n)}s(void 0)}))}}var a={sendNotification:function(n){var r=n.title,e=n.options;if(this._checkAvailability())return this._checkPermission()?void this._showNotification({title:r,options:e}):(console.log("User did not yet granted permission"),void this._requestPermission());console.log("Notification not supported in this browser")},_checkAvailability:function(){return!!("Notification"in window)},_checkPermission:function(){return"granted"===Notification.permission},_requestPermission:function(){return i(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Notification.requestPermission();case 2:"denied"===(r=n.sent)&&console.log("Notification Denied"),"default"===r&&console.log("Permission closed");case 5:case"end":return n.stop()}}),n)})))()},_showNotification:function(n){return i(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.title,t=n.options,r.next=3,navigator.serviceWorker.ready;case 3:r.sent.showNotification(e,t);case 5:case"end":return r.stop()}}),r)})))()}},o=e(0),s={init:function(n){new WebSocket(n).onmessage=this._onMessageHandler},_onMessageHandler:function(n){var r=JSON.parse(n.data);console.log(r),a.sendNotification({title:"".concat(r.name," new restaurant"),options:{body:r.description,image:"".concat(o.a.BASE_IMAGE_URL+r.pictureId)}})}};r.a=s},,,function(n,r,e){var t=e(5),i=e(15);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);n.exports=i.locals||{}},function(n,r,e){var t=e(6),i=e(7),a=e(16);(r=t(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Karla&family=Lemonada:wght@700&family=Nosifer&family=Nunito+Sans&family=Roboto&display=swap);"]),r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap);"]);var o=i(a);r.push([n.i,"*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Karla', sans-serif;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.skip-link {\r\n    position: absolute;\r\n    top: -60px;\r\n    left: 0;\r\n    background-color: #bf1722;\r\n    color: white;\r\n    padding: 8px;\r\n    z-index: 100;\r\n }\r\n  \r\n .skip-link:focus {\r\n    top: 0;\r\n }\r\nnav{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n    height: 80px;\r\n    align-items: center;\r\n}\r\nnav ul{\r\n    display: flex;\r\n    list-style: none;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n.nav-list-container{\r\n    display: block;\r\n}\r\nnav ul li a {\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    padding: 1.3em;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: black;\r\n    width: fit-content;\r\n    \r\n}\r\n\r\n.logo{\r\n    height: 50px;\r\n    margin-top: 10px;\r\n    padding-left: 10px;\r\n}\r\n.nav-link::after {\r\n    content: '';\r\n    display: block;\r\n    width: 0px;\r\n    height: 3px;\r\n    background:#E42A4F;\r\n    transition: 0.3s;\r\n }\r\n \r\n .nav-link:hover::after {\r\n    width: 100%;\r\n }\r\n\r\n.hamburger{\r\n    display: none;\r\n}\r\n.header__menu {\r\n    font-size: 32px;\r\n    display: block;\r\n    width: 44px;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.hero {\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 400px;\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    filter: blur(1px);\r\n    -webkit-filter: blur(1px);\r\n    text-align: center;\r\n    background-image: url("+o+");\r\n    background-position: center;\r\n}\r\n\r\n.hero__inner {\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0, 0.4); \r\n    color: white;\r\n    font-weight: bold;\r\n    border: 3px solid #f1f1f1;\r\n    z-index: 2;\r\n    position: absolute;\r\n    top:50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    width: 80%;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n.container-hero{\r\n    position: relative;\r\n}\r\n\r\n.hero__title {\r\n    color: #fff;\r\n    font-weight: 500;\r\n    font-size: 36px;\r\n}\r\n\r\n.hero__tagline {\r\n    color: #fff;\r\n    margin-top: 16px;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n} \r\nh3{\r\n    font-family: 'Quicksand', sans-serif;\r\n    margin: 0;\r\n}\r\nmain {\r\n    flex: 1;\r\n    font-family: 'Quicksand', sans-serif;\r\n  }\r\n.footer{\r\n    background-color: #E42A4F;\r\n    padding: 8px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    font-weight: bold;\r\n}\r\n.restaurant{\r\n    padding: 35px;\r\n    margin-top: 20px;\r\n}\r\n\r\n#list-restaurant {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    column-gap: 35px;\r\n    row-gap: 20px;\r\n    padding: 0 30px;\r\n   margin-top: 24px;\r\n    \r\n}\r\n.namee{\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n#list-restaurant .card {\r\n    padding: 16px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 10px;\r\n}\r\n.resto1, .resto2, .resto3, .resto4{\r\n    width: 100%;\r\n}\r\n.deskrip{\r\n    font-size: 15px;\r\n    width: 100%;\r\n    text-align: justify;\r\n    color: #000000;\r\n}\r\n.maps{\r\n    width: 20px;\r\n}\r\n.title-list{\r\n    font-size: 190%; \r\n    color:#000000; \r\n    text-align: left; \r\n    padding-left: 55px;\r\n    margin-bottom: 15px;\r\n}\r\n#anchor{\r\n    text-decoration: none;\r\n}\r\n\r\n.namee, .location, .paragraf{\r\n    margin-top: 13px;\r\n}\r\n\r\n.resto__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 40px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color:#640b0b;\r\n    color: white;\r\n  }\r\n  .resto__header {\r\n    position: relative;\r\n  }\r\n\r\n  .title-list-detail{\r\n    font-size: 170%; \r\n    color:#000000; \r\n    text-align: left; \r\n    padding-left: 55px;\r\n    margin-bottom: 15px;\r\n\r\n}\r\n.container{\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n.picture-descript{\r\n    display: flex;\r\n    margin-top: 40px;\r\n    width: fit-content;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n.img{\r\n    width: 55vw;\r\n    padding: 6px;\r\n    border-top: solid 7px #000000;\r\n    border-right: solid 7px #E42A4F ;\r\n   \r\n}\r\n.picture{\r\n    padding-left: 30px;\r\n}\r\n.descript-menu{\r\n    height: fit-content;\r\n    text-align: justify;\r\n    padding: 20px;\r\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\r\n}\r\n\r\n.icon{\r\n    width: 26px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.header2{\r\n    font-weight: lighter;\r\n    font-size: 20px;\r\n    margin-bottom: 15px;\r\n    margin-top: 10px;\r\n    \r\n}\r\nh1{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\nul{\r\n    list-style-type: none;\r\n}\r\n.list{\r\n   font-size: 20px;\r\n}\r\n.list li{\r\n   padding: 7px;\r\n   border-bottom: 1px solid black;\r\n}\r\n.categories{\r\n   background-color: #E42A4F;\r\n   color: rgb(255, 255, 255);\r\n   width: 20%;\r\n   padding: 8px;\r\n   text-align: center;\r\n   border-radius: 5px; \r\n   font-size: 18px;\r\n   margin-bottom: 10px;\r\n}\r\n.detail{\r\n   margin-top: 70px;\r\n  \r\n}\r\n.container-des{\r\ntext-align: center;\r\npadding-left: 80px;\r\npadding-right: 80px;\r\n}\r\n.line{\r\n   width: 20vw;\r\n   margin-top: 40px;\r\n}\r\n.food, .drink{\r\n   display: grid;\r\n   grid-template-columns: 1fr 1fr;\r\n   margin-top: 50px;\r\n}\r\n.picture-food{\r\n   width: 35vw;\r\n}\r\n.picture-food-container{\r\n   text-align: center;\r\n   margin-top: 70px;\r\n}\r\n.picture-drink-container{\r\ntext-align: center;\r\n}\r\n.food-list{\r\n   margin-top: 50px;\r\n   padding-right: 40px;\r\n  \r\n}\r\n.drink-list{\r\n   padding-left: 40px;\r\n   text-align: right;\r\n}\r\n.picture-drink{\r\n   width: 35vw;\r\n}\r\n.review{\r\n   padding: 40px;\r\n}\r\n.review-list{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap:5px ;\r\n}\r\n.review-card{\r\nmargin-top: 10px;\r\npadding: 10px;\r\nbox-shadow: rgba(255, 0, 0, 0.35) 0px 5px 15px;\r\nwidth: 28vw;\r\nborder-radius: 20px;\r\nborder-bottom: solid 1px #E42A4F;\r\nmargin-bottom: 15px;\r\n}\r\n.identitas{\r\n   display: flex;\r\n   justify-content: space-between;\r\n   color: rgb(156, 156, 156);\r\n   margin-bottom: 10px;\r\n}\r\n.deskrip-review, .identitas{\r\n    padding-left: 5px;\r\n}\r\n\r\n.form{\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n}\r\nform {\r\nmargin: 2em 0;\r\npadding: 1.5em;\r\nborder: 3px solid #E42A4F;\r\nborder-radius: 0.5em;\r\n\r\nbackground-color: #ffdfe6;\r\n}\r\n\r\n.form-control {\r\ndisplay: block;\r\nwidth: 100%;\r\npadding: 0.3em;\r\nfont-family: 'Comfortaa', cursive;\r\nfont-size: 1em;\r\nfont-weight: normal;\r\ncolor: rgb(0, 0, 0);\r\nbackground-color: #fff;\r\nbackground-clip: padding-box;\r\nborder: 2px solid #E42A4F;\r\nappearance: none;\r\nborder-radius: 0.5em;\r\nmargin-top: 5px;\r\n}\r\n\r\n.form-label {\r\nfont-weight: bold;\r\nfont-style: normal;\r\nfont-size: 15px;\r\ncolor: var(--secondary-color);\r\n}\r\n\r\n.mb-3 {\r\nmargin-bottom: 1.3em;\r\nmargin-top: 0.5em;\r\n}\r\n\r\n.btn{\r\n    background-color: #E42A4F;\r\n    color: #fff;\r\n    width: 70px;\r\n    border: none;\r\n    border-radius: 8px;\r\n    font-size: 15px;\r\n\r\n}\r\n\r\nbutton, a, input{\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    cursor: pointer;\r\n}\r\n\r\n/*\r\n   Like\r\n*/\r\n.like {\r\n    font-size: 18px;\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    background-color: #db0000;\r\n    color: white;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    width: 55px;\r\n    height: 55px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/* Loading page */\r\n\r\n.loading-template{\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n@keyframes ldio-5jueiv32ufk {\r\n    0% { opacity: 1 }\r\n    100% { opacity: 0 }\r\n  }\r\n  .ldio-5jueiv32ufk div {\r\n    left: 94px;\r\n    top: 48px;\r\n    position: absolute;\r\n    animation: ldio-5jueiv32ufk linear 1s infinite;\r\n    background: #fe718d;\r\n    width: 12px;\r\n    height: 24px;\r\n    border-radius: 6px / 12px;\r\n    transform-origin: 6px 52px;\r\n  }.ldio-5jueiv32ufk div:nth-child(1) {\r\n    transform: rotate(0deg);\r\n    animation-delay: -0.9166666666666666s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(2) {\r\n    transform: rotate(30deg);\r\n    animation-delay: -0.8333333333333334s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(3) {\r\n    transform: rotate(60deg);\r\n    animation-delay: -0.75s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(4) {\r\n    transform: rotate(90deg);\r\n    animation-delay: -0.6666666666666666s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(5) {\r\n    transform: rotate(120deg);\r\n    animation-delay: -0.5833333333333334s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(6) {\r\n    transform: rotate(150deg);\r\n    animation-delay: -0.5s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(7) {\r\n    transform: rotate(180deg);\r\n    animation-delay: -0.4166666666666667s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(8) {\r\n    transform: rotate(210deg);\r\n    animation-delay: -0.3333333333333333s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(9) {\r\n    transform: rotate(240deg);\r\n    animation-delay: -0.25s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(10) {\r\n    transform: rotate(270deg);\r\n    animation-delay: -0.16666666666666666s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(11) {\r\n    transform: rotate(300deg);\r\n    animation-delay: -0.08333333333333333s;\r\n    background: #fe718d;\r\n  }.ldio-5jueiv32ufk div:nth-child(12) {\r\n    transform: rotate(330deg);\r\n    animation-delay: 0s;\r\n    background: #fe718d;\r\n  }\r\n  .loadingio-spinner-spinner-pavh03kq49 {\r\n    width: 200px;\r\n    height: 200px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    background: #ffffff;\r\n  }\r\n  .ldio-5jueiv32ufk {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(1);\r\n    backface-visibility: hidden;\r\n    transform-origin: 0 0; /* see note above */\r\n  }\r\n  .ldio-5jueiv32ufk div { box-sizing: content-box; }",""]),n.exports=r},,function(n,r,e){var t=e(5),i=e(18);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);n.exports=i.locals||{}},function(n,r,e){var t=e(6),i=e(7),a=e(19);r=t(!1);var o=i(a);r.push([n.i,"/* Responsif */ \r\n\r\n@media screen and (max-width : 768px) {\r\n    nav ul{\r\n        position: fixed;\r\n        right: 0;\r\n        align-items: center;\r\n        background-color: white;\r\n        justify-content: space-evenly;\r\n        height: 100vh;\r\n        top: 0;\r\n        display: list-item;\r\n\r\n    }\r\n    .hamburger{\r\n        display: flex;\r\n    }\r\n    .nav-list-container{\r\n        display:none;\r\n        width: 100%;\r\n        height: 100vh;\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        z-index: 999;\r\n    }\r\n    .nav-list-container.open{\r\n        display: block;\r\n    }\r\n    .first-content, .second-content{\r\n        flex-direction: column;\r\n        width: 100%;\r\n    }\r\n    .interior, #moment{\r\n        width: 100%;\r\n    }\r\n    .picture-food, .picture-drink{\r\n        width: 80%;\r\n    }\r\n    .img{\r\n        width: 100%;\r\n    }\r\n    .descript-menu, .form, .picture{\r\n        width: 80%;\r\n    }\r\n    #list-restaurant{\r\n        grid-template-columns: 1fr;\r\n        padding: 0;\r\n    }\r\n    .hero__inner{\r\n        top:50%\r\n    }\r\n    .rigth-content, .left-second-content, .title-list{\r\n     padding: 0; \r\n    }\r\n\r\n    .picture-descript{\r\n        flex-direction: column;\r\n    }\r\n    .food, .drink{\r\n        display: block;\r\n    }\r\n    .review-list{\r\n        grid-template-columns: 1fr 1fr;\r\n        gap : 1px;\r\n        \r\n    }\r\n    .review-card{\r\n        width: 80%;\r\n    }\r\n   \r\n}\r\n   @media screen and (max-width : 600px) {\r\n    .hero{\r\n        background-image: url("+o+");\r\n    }\r\n}    \r\n@media screen and (max-width : 540px) {\r\n    .review-list{\r\n        display: block;\r\n    }\r\n    .review-card{\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width : 540px) {\r\n    #list-restaurant{\r\n        grid-template-columns: 1fr 1fr;\r\n        padding: 0;\r\n    }\r\n   \r\n}\r\n@media screen and (min-width : 1000px) {\r\n    #list-restaurant{\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        padding: 0;\r\n    }\r\n   \r\n}\r\n\r\n\r\n\r\n",""]),n.exports=r}]);