
import elements from './base';


const formatTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  // const day = `0${date.getDay()}`;

  const weekDay = new Array(7);
  weekDay[0] = 'Monday';
  weekDay[1] = 'Tuesday';
  weekDay[2] = 'Wednesday';
  weekDay[3] = 'Thursday';
  weekDay[4] = 'Friday';
  weekDay[5] = 'Saturday';
  weekDay[6] = 'Sunday';


  return date;
};

const renderDay = (item, icon) => {
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


export { renderDay as default };
