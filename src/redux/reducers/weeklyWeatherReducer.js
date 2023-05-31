import {
  FETCH_WEEKLY_WEATHER_SUCCESS,
  ASYNC_FETCH_WEATHER_SEARCH_DAILY,
} from '@constants';

const initialState = {
  weeklyWeatherData: [],
};

export default function weeklyWeatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEEKLY_WEATHER_SUCCESS:
      return { ...state, weeklyWeatherData: action.payload };
    case ASYNC_FETCH_WEATHER_SEARCH_DAILY:
      return { ...state, weeklyWeatherData: action.payload };

    default:
      return state;
  }
}
