import { config } from '../constants';

async function fetchGetHourlyWeather(weatherData) {
  const response = await fetch(
    `${config.apiOpenweatherUrl}forecast?q=${weatherData}&appid=${config.apiKeyOpenweather}&cnt=6&units=metric`,
  );
  const data = await response.json();
  return data;
}

export default fetchGetHourlyWeather;
