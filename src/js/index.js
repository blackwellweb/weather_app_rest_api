
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


// @ts-ignore
// import img from '../assets/svgs/clouds.svg';


/* Global state of the app ----------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------*/
// - Search object
// - Current hour object
// - Forecast for the day object


const state = {};


/* Search Controller------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

const controlSearch = async () => {
  // Check if user geolocation is on
  if (navigator.geolocation) {
    // Get long and latitude hard code for now
    let long = 13.0562456;
    let lat = 55.6108462;

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

      renderMainView(currently);

      // Render Main View
    } catch (err) {
      console.log(err);
    }
  }
};

controlSearch();
