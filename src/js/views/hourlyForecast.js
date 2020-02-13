import elements from './base';


const formatTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  const hours = date.getHours();
  // const minutes = `0${date.getMinutes()}`;

  return hours;
};


const renderHour = (item, icon) => {
  const markup = `
  <div class="forecast">
  <h3 class="forecast__title">
      <span class="forecast__title--sub">${formatTimeStamp(item.time)}:00</span>
      <span class="forecast__title--main">${item.summary} ${Math.round(item.temperature)}°</span>
  </h3>
  <div class="forecast__info">
      <ul>
          <li>Wind: ${item.windSpeed}</li>
          <li>Pressure: ${item.pressure}mb</li>
          <li>Humidity: ${item.humidity}%</li>
      </ul>
  </div>
  <div class="forecast__icon"><img class="forecast__icon--small" src="${icon}" alt="Small Weather Icon Cloudy"></div>
</div>`;
  elements.hourlyForecast.insertAdjacentHTML('afterbegin', markup);
};


export { renderHour as default };
