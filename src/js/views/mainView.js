
import elements from './base';


const renderMainView = (item) => {
  const markup = `
  <h1 class="mainView__headingPrimary">
    <span class="headingPrimary--sub">Today</span>
    <span class="headingPrimary--main">${item.summary}</span>
  </h1>
  <h2 class="mainView__headingSecondary">${Math.round(item.temperature)}°</h2>
  <div class="mainView__icon">
    <div class="icon--large">&nbsp;</div>
  </div>
    `;
  elements.mainView.insertAdjacentHTML('afterbegin', markup);
};


export { renderMainView as default };
