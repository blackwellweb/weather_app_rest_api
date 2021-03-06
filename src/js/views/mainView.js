
import elements from './base';


const renderMainView = (item, icon) => {
  const markup = `
  <h1 class="mainView__headingPrimary">
    <span class="headingPrimary--sub">Today</span>
    <span class="headingPrimary--main">${item.summary}</span>
  </h1>
  <h2 class="mainView__headingSecondary">${Math.round(item.temperature)}°</h2>
  <div class="mainView__icon">
    <img class="mainView__icon--large" src="${icon}" alt="Weather Icon Cloudy">
  </div>
    `;
  elements.mainView.insertAdjacentHTML('afterbegin', markup);
};


export { renderMainView as default };
