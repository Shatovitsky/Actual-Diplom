import { config } from '../constants';

export const currentData = navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lot = position.coords.longitude;
  },
);

export const getDataWeather = async (city) => {
  const request = await fetch(
    `${config.apiOpenweatherUrl}weather?q={city}&appid=${config.apiSecondKeyOpenweather}`,
  );
  return request.join;
};

export const getHourlyWeather = async (weatherData) => {
  try {
    const response = await fetch(
      `${config.apiOpenweatherUrl}forecast?q=${weatherData.name}&appid=${config.apiKeyOpenweather}&cnt=6&units=metric`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getDailyWeather = async (weatherData) => {
  try {
    const response = await fetch(
      `${config.apiWeatherbitUrl}daily?city=${weatherData.name}&NC&key=${config.apiKeyWeatherbit}&days=7`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getStaticCityWeather = async () => {
  try {
    const response = await fetch(
      `${config.apiOpenweatherUrl}weather?q=Minsk&appid=${config.apiKeyOpenweather}&units=metric`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getStaticHourlyWeather = async () => {
  try {
    const response = await fetch(
      `${config.apiOpenweatherUrl}forecast?q=Minsk&appid=${config.apiKeyOpenweather}&cnt=6&units=metric`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getStaticDailyWeather = async () => {
  try {
    const response = await fetch(
      `${config.apiWeatherbitUrl}daily?city=Minsk&NC&key=${config.apiKeyWeatherbit}&days=7`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
