
/**
 * @file index.js is the root file for thisWeather app REST API
 * @author Paul Blackwell
 * @see <a href="https://paulblackwell.dev">Paul Blackwell</a>
 */


/* Imports ---------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
import '../css/main.scss';
// import { loader } from 'mini-css-extract-plugin';
import Search from './models/Search';
import { key } from './key';
// import elements from './views/base';
import renderMainView from './views/mainView';
import { showLoader, hideLoader } from './models/loader';
import elements from './views/base';
import renderHour from './views/hourlyForecast';
import renderDay from './views/sevenDayForecast';
import { updateNav, removeContent } from './views/updateNav';


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


/* HourlyForecast Controller ---------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


const controlHourlyForecast = (hour) => {
  // Reverse the order of the data so it renders in the correct order
  hour.reverse();
  hour.forEach((item) => {
    renderHour(item, getImage(item.icon));
  });
};

/* HourlyForecast Controller ---------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/


const controlSevenDayForecast = (day) => {
  // Reverse the order of the data so it renders in the correct order
  day.reverse();
  day.forEach((item) => {
    renderDay(item, getImage(item.icon));
  });
};


/* Get Geolocation -------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// Declare global variables latitude and longitude
let latitude;
let longitude;


// Get Geolocation
const getGeolocation = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      resolve({ latitude, longitude });
    });
  } else {
    reject();
  }
});


/* Search Controller------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

const controlSearch = async (coordinates) => {
  // Check if user geolocation is on
  if (navigator.geolocation) {
    // Get latitude and longitude, this will be passed in
    const lat = coordinates.latitude;
    const long = coordinates.longitude;

    // Show loader
    showLoader(elements.loaderIcon);

    // New search object and add state
    state.search = new Search(`${key}/${long},${lat}`);

    try {
      //  Search for weather
      await state.search.getResults();

      const { currently, hourly, daily } = state.search.result;
      // console.log(await currently);

      // Render Main view
      renderMainView(currently, getImage(currently.icon));

      // render Hourly Forecast
      controlHourlyForecast(hourly.data);

      // Hide loader
      hideLoader(elements.loaderIcon);

      // Add EventListeners to nav ForwardButton
      elements.navForwardButton.addEventListener('click', () => {
        // Only run if the button can be clicked
        if (elements.navForwardButton.classList.contains('nav--active')) {
          // Update button state
          updateNav(elements.navForwardButton);

          // Show loader
          showLoader(elements.loaderIcon);

          // remove old content
          removeContent(elements.hourlyForecast);

          // load new content
          controlSevenDayForecast(daily.data);

          // Hide loader
          hideLoader(elements.loaderIcon);
        }
      });

      // Add EventListeners to nav BackButton
      elements.navBackButton.addEventListener('click', () => {
        // Only run if the button can be clicked
        if (elements.navBackButton.classList.contains('nav--active')) {
          // Update button state
          updateNav(elements.navBackButton);

          // Show loader
          showLoader(elements.loaderIcon);

          // remove old content
          removeContent(elements.hourlyForecast);

          // load new content
          controlHourlyForecast(hourly.data);

          // Hide loader
          hideLoader(elements.loaderIcon);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
};


/* Show Loader -----------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

// If the user hasn't clicked or allowed the page to get their Geolocation
showLoader(elements.loaderIcon);


/* Fire getGeolocation  --------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

getGeolocation.then((getCoordinates) => {
  // Pass the resolve from getGeolocation, this will be the latitude and longitude as an object
  controlSearch(getCoordinates);
});
