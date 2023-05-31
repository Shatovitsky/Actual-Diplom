import {
  ASYNC_FETCH_WEATHER_SEARCH_DATA_CITY,
  ASYNC_FETCH_WEATHER_SEARCH_DATA_IMG,
  ASYNC_FETCH_WEATHER_SEARCH_DATA_SYS,
  ASYNC_FETCH_WEATHER_SEARCH_DATA_TEMP,
  ASYNC_FETCH_WEATHER_SEARCH_NAME_WEATHER,
} from '@constants';

const initialState = {
  city: '',
  sys: '',
  temp: '',
  image: '',
  nameWeather: '',
};

export default function searchWeatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case ASYNC_FETCH_WEATHER_SEARCH_DATA_CITY:
      return { ...state, city: action.payload };
    case ASYNC_FETCH_WEATHER_SEARCH_DATA_SYS:
      return { ...state, sys: action.payload };
    case ASYNC_FETCH_WEATHER_SEARCH_DATA_TEMP:
      return { ...state, temp: action.payload };
    case ASYNC_FETCH_WEATHER_SEARCH_DATA_IMG:
      return { ...state, image: action.payload };
    case ASYNC_FETCH_WEATHER_SEARCH_NAME_WEATHER:
      return { ...state, nameWeather: action.payload };
    default:
      return state;
  }
}
