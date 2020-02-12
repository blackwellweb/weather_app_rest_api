/* eslint-disable no-param-reassign */

const showLoader = (target) => {
  target.classList.add('loader--active');
  target.classList.remove('loader--inactive');
};


const hideLoader = (target) => {
  target.classList.add('loader--inactive');
  target.classList.remove('loader--active');
};


export { hideLoader, showLoader };
