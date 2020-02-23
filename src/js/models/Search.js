
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
      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const res = await axios(`${proxy}https://api.darksky.net/forecast/${this.query}?units=si`);

      this.result = res.data;
      // console.log(this.result);
    } catch (err) {
      console.log(err);
    }
  }
}
