
/**
 * @file index.js is the root file for thisWeather app REST API
 * @author Paul Blackwell
 * @see <a href="https://paulblackwell.dev">Paul Blackwell</a>
 */


/* Imports ---------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
import '../css/main.scss';
import Search from './models/Search';
import { key } from './key';
// import elements from './views/base';
import renderMainView from './views/mainView';
import { showLoader, hideLoader } from './models/loader';
import elements from './views/base';


/* Global state of the app ----------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
// - Search object
// - Current hour object
// - Forecast for the day object


const state = {};


/* Import All Images------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


function importAll(r) {
  return r.keys().map(r);
}

/**
 * require.context One of the main features of webpack's compiler is to recursively
 * parse all the modules, we are using hear to import all images as webpack
 * will hash all our images to prevent the browser from caching them.
 * However this means that we have to use a few work arounds to dynamically
 * load images in using js, as we will only know the first part of the image
 * not the hash.
 */
// @ts-ignore
const images = importAll(require.context('../assets/svgs', false, /\.(png|jpe?g|svg)$/));


// Get image function allows use to get the correct hashed image
const getImage = (input) => {
  let imageNeeded;

  images.forEach((image) => {
    // Each image will give something like this 'imgs/clouds.813f42514695c0e64c51ad813d2ab2b0.svg'
    // If the image sting includes the input with in set imageNeeded to that image
    // For example if input = 'clouds',
    // imageNeeded = imgs/clouds.813f42514695c0e64c51ad813d2ab2b0.svg'

    if (image.includes(input)) {
      imageNeeded = image;
    }
  });
  return imageNeeded;
};


/* Search Controller------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

const controlSearch = async () => {
  // Check if user geolocation is on
  if (navigator.geolocation) {
    // Get long and latitude hard code for now
    let long = 13.0562456;
    let lat = 55.6108462;

    // Show loader
    showLoader(elements.loaderIcon);

    // TODO : this is not working
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
    });

    // New search object and add state
    state.search = new Search(`${key}/${long},${lat}`);

    try {
      //  Search for weather
      await state.search.getResults();

      const { currently } = state.search.result;
      console.log(await currently);

      // Render Main view
      renderMainView(currently, getImage(currently.icon));

      // Hide loader
      hideLoader(elements.loaderIcon);
    } catch (err) {
      console.log(err);
    }
  }
};

controlSearch();
