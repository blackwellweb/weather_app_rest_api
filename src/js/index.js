
//import "../css/main.css";
import "../css/main.scss";


// Global app controller 
import x from './test';
const y = 23;
console.log(`${x} and ${y}`);



/* Js doc examples -------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
// @ts-check


/**
 * Student Name
 * &type {string}
 */
const studentName = 'John Doe';

/**
 * Array of Grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];




/**
 * Todo object
 * @type {{id: number, text: string}}
 */
const todo = {
    id: 1,
    text: 'Hello',
};





/**
 * Calculate Tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
}

//console.log(calculateTax(100, 0.1));


/**
 * A student
 * @typeef {Object} student
 */


