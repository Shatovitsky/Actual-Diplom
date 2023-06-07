export const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const DELAY_FOR_FIND_CITIES = 500;
export const UPDATE_THE_TIME = 6000;
export const today = new Date();
export const GET_CURRENT_LOCATION_REQUESTED = 'GET_CURRENT_LOCATION_REQUESTED';
export const ASYNC_FETCH_WEATHER_DATA_GEOLOCATION_BAN =
  'ASYNC_FETCH_WEATHER_DATA_GEOLOCATION_BAN';
export const GET_CURRENT_LOCATION_FAILED = 'GET_CURRENT_LOCATION_FAILED';
// GoogleEvents and User

export const CLEAR_USER = 'CLEAR_USER';
export const CLEAR_ALL_EVENTS = 'CLEAR_ALL_EVENTS';
export const CLEAR_SCHEDULED_EVENTS = 'CLEAR_SCHEDULED_EVENTS';
export const SET_USER = 'SET_USER';
export const SET_SCHEDULED_EVENTS = 'SET_SCHEDULED_EVENTS';
export const SET_ALL_EVENTS = 'SET_ALL_EVENTS';

// GoogleEvents and User
export const ASYNC_FETCH_WEATHER_SEARCH_DATA_SYS =
  'ASYNC_FETCH_WEATHER_SEARCH_DATA_SYS';
export const ASYNC_FETCH_WEATHER_SEARCH_DATA_CITY =
  'ASYNC_FETCH_WEATHER_SEARCH_DATA_CITY';
export const ASYNC_FETCH_WEATHER_SEARCH_DATA_TEMP =
  'ASYNC_FETCH_WEATHER_SEARCH_DATA_TEMP';
export const ASYNC_FETCH_WEATHER_SEARCH_DATA_IMG =
  'ASYNC_FETCH_WEATHER_SEARCH_DATA_IMG';
export const ASYNC_FETCH_WEATHER_SEARCH_DAILY =
  'ASYNC_FETCH_WEATHER_SEARCH_DAILY';
export const ASYNC_FETCH_WEATHER_SEARCH_HOURLY =
  'ASYNC_FETCH_WEATHER_SEARCH_HOURLY';
export const ASYNC_FETCH_WEATHER_SEARCH_NAME_WEATHER =
  'ASYNC_FETCH_WEATHER_SEARCH_NAME_WEATHER';
export const GET_CURRENT_WEATHER_DATA_SUCCEEDED =
  'GET_CURRENT_WEATHER_DATA_SUCCEEDED';
export const ASYNC_FETCH_WEATHER_DATA = 'ASYNC_FETCH_WEATHER_DATA';

export const FETCH_WEEKLY_WEATHER = 'FETCH_WEEKLY_WEATHER';
export const FETCH_WEEKLY_WEATHER_SUCCESS = 'FETCH_WEEKLY_WEATHER_SUCCESS';
export const FETCH_HOURLY_WEATHER_SUCCESS = 'FETCH_HOURLY_WEATHER_SUCCESS';

export const config = {
  apiKeyOpenweather: process.env.REACT_APP_OPENWEATHER_KEY,
  apiSecondKeyOpenweather: process.env.REACT_APP_OPENWEATHER_SECOND_KEY,
  apiKeyAccuweather: process.env.REACT_APP_ACCUWEATHER_KEY,
  apiKeyWeatherbit: process.env.REACT_APP_WEATHERBIT_KEY,
  apiOpenweatherUrl: process.env.REACT_APP_OPENWEATHER_URL,
  apiWeatherbitUrl: process.env.REACT_APP_WEATHERBIT_URL,
  apiAccuweatherUrl: process.env.REACT_APP_ACCUWEATHER_URL,
  apiOpenweatherImg: process.env.REACT_APP_OPENWEATHER_IMG,
  apiWeatherbitImg: process.env.REACT_APP_WEATHERBIT_IMG,
  cliendId: process.env.REACT_APP_CLIENT_ID,
};
