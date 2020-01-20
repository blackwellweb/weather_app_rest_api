
// import "../css/main.css";
import '../css/main.scss';


// Global app controller
import x from './test';

const y = 23;
console.log(`${x} and ${y}`);


/* Js doc examples -------------------------------------------------*/
/*------------------------------------------------------------------*/
/*------------------------------------------------------------------*/
// @ts-check
const {
  add, subtract, divide, multiply,
} = require('./calculator');

/**
 * @file index.js is the root file for thios example app
 * @author Paul Blackwell
 * @see <a href="https://paulblackwell.dev">Paul Blackwell</a>
 */


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
const calculateTax = (amount, tax) => `$${amount + tax * amount}`;

// console.log(calculateTax(100, 0.1));


/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */


/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  age: 20,
  isActive: true,
};

/**
 * Class to create a person object
 */

class Person {
  /**
         * @param {object} personInfo Information about the person
         */
  constructor(personInfo) {
    /**
                 * @property {string} name  Persons Name
                 */
    this.name = personInfo.name;
    /**
                 * @property {string} age Persons age
                 */
    this.age = personInfo.age;
  }

  /**
         * @property {Function} geet A greeting with the name and age
         * @returns void
         */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}


/**
 * Person one
 * See {@link Person}
 */

const person1 = new Person({
  name: 'John Doe',
  age: 30,
});
// console.log(person1.greet());


console.log(add(20, 30));
