import { config } from '../constants';

const getDataWeather = async ({ latitude, longitude }) => {
  const request = await fetch(
    `${config.apiOpenweatherUrl}weather?lat=${latitude}&lon=${longitude}&appid=${config.apiKeyOpenweather}&units=metric`,
  );

  return await request.json();
};

export default getDataWeather;
