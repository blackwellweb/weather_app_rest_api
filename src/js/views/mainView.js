
import { elements } from './base';

const renderMainView = (item) => {
  const markup = `
  <h1 class="mainView__headingPrimary">
    <span class="headingPrimary--sub">Now</span>
    <span class="headingPrimary--main">${item.summary}</span>
  </h1>
  <h2 class="mainView__headingSecondary">${item.temperature}°</h2>
  <div class="mainView__icon">
    <img class="mainView__icon--large" src=".//assets/svgs/clouds.svg" alt="Weather Icon Cloudy">
  </div>
    `;
  elements.mainView.insertAdjacentHTML('afterbegin', markup);
};
