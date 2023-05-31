import { config } from '../constants';

async function fetchWeatherData(cityName) {
  const response = await fetch(
    `${config.apiOpenweatherUrl}weather?q=${cityName}&appid=${config.apiKeyOpenweather}&units=metric`,
  );
  const data = await response.json();
  if (data.cod === '404') {
    alert('Город не найден');
    return null;
  }
  return data;
}

export default fetchWeatherData;
