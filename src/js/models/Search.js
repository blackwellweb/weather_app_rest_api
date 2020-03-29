
/* Imports ---------------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
import axios from 'axios';


/* Search Class-----------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/

/**
 * Search Module
 * This allows us to make an AJAX request to the weather API
 * @module Search
 */

/**
  * Class to create a new search object
  */
export default class Search {
  constructor(query) {
    this.query = query;
  }


  async getResults() {
    try {
      // const proxy = 'https://cors-anywhere.herokuapp.com/';
      // const res = await axios(`${proxy}https://api.darksky.net/forecast/${this.query}?units=si`);

      // Post the long and lant to the server and it will send back data form the darkSky API
      // This doesn't work on localhost
      const res = await axios.post('/.netlify/functions/getData', {
        long: '1',
        lat: '1',
      });

      console.log(res);

      this.result = res.data;
      // console.log(this.result);
    } catch (err) {
      console.log(err);
    }
  }
}
