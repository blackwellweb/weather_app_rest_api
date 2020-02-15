
import elements from './base';


// This will update the button state
const updateNav = (element) => {
  // Check what button you have
  if (element === elements.navForwardButton) {
    // change button state
    element.classList.toggle('nav--active');
    element.classList.toggle('nav--inactive');

    // change the back buttons state
    elements.navBackButton.classList.toggle('nav--active');
    elements.navBackButton.classList.toggle('nav--inactive');
  } else if (element === elements.navBackButton) {
    // change button state
    element.classList.toggle('nav--active');
    element.classList.toggle('nav--inactive');

    // change the Forward buttons state
    elements.navForwardButton.classList.toggle('nav--active');
    elements.navForwardButton.classList.toggle('nav--inactive');
  }
};


// Remove Content
const removeContent = (target) => {
  // eslint-disable-next-line no-param-reassign
  target.innerHTML = '';
};


export { updateNav, removeContent };
