
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
      const res = await axios(`${proxy}https://api.darksky.net/forecast/${this.query}`);
      // this.result = res.data.recipes;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}
