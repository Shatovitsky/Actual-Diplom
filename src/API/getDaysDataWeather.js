import { config } from '../constants';

async function fetchGetDaysWeather(weatherData) {
  const response = await fetch(
    `${config.apiWeatherbitUrl}daily?city=${weatherData}&NC&key=${config.apiKeyWeatherbit}&days=7`,
  );
  const data = await response.json();
  return data;
}

export default fetchGetDaysWeather;
