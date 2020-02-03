
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
    // Get long and latitude

    let long;
    let lat;

    const getPosition = (e) => {
      navigator.geolocation.getCurrentPosition((position) => {
        e = position.coords.longitude;
        // e = position.coords.latitude;
        return e;
      });
    };

    console.log(getPosition(long));

    // navigator.geolocation.getCurrentPosition((position) => {
    //   long = position.coords.longitude;
    //   lat = position.coords.latitude;
    // });

    // New search object and add state
    state.search = new Search(`${key}/${long},${lat}`);


    try {
      //  Search for weather
      await state.search.getResults();

      // Render Main View
    } catch (err) {
      console.log(err);
    }
  }
};

// const {currenty} = state.search;
console.log(state.search);
controlSearch();
