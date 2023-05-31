import {
  FETCH_HOURLY_WEATHER_SUCCESS,
  ASYNC_FETCH_WEATHER_SEARCH_HOURLY,
} from '@constants';

const initialState = {
  hourlyWeatherData: [],
};

export default function hourlyWeatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HOURLY_WEATHER_SUCCESS:
      return { ...state, hourlyWeatherData: action.payload };
    case ASYNC_FETCH_WEATHER_SEARCH_HOURLY:
      return { ...state, hourlyWeatherData: action.payload };
    default:
      return state;
  }
}
