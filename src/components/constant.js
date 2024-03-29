export let IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const ICON_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const RESTAURANT_API =
  // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.516007840787648&lng=80.61393041163683&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  // " https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D16.5024002%26lng%3D80.6472588%26offset%3D15%26sortBy%3DRELEVANCE%26pageType%3DSEE_ALL%26page_type%3DDESKTOP_SEE_ALL_LISTING";
  "https://foodfire.onrender.com/api/restaurants?lat=16.516007840787648&lng=80.61393041163683&page_type=DESKTOP_WEB_LISTING";

export const RESTAURANT_MENU_URL =
  // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.5024002&lng=80.6472588&restaurantId=";
  // "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D16.5024002%26lng%3D80.6472588%26restaurantId=";
  "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=16.516007840787648&lng=80.61393041163683&&submitAction=ENTER&restaurantId=";

export const SUB_CAROUSEL_ITEM_URL =
  // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.516007840787648&lng=80.61393041163683&collection=";
  "https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D16.516007840787648%26lng%3D80.61393041163683%26collection=";
