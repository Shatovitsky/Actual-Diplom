import {
  GET_CURRENT_WEATHER_DATA_SUCCEEDED,
  FETCH_WEEKLY_WEATHER,
  ASYNC_FETCH_WEATHER_DATA_GEOLOCATION_BAN,
} from '@constants';

const initialState = {
  today: {},
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER_DATA_SUCCEEDED: {
      return { ...state, today: action.payload };
    }
    case FETCH_WEEKLY_WEATHER: {
      return { ...state, datat: action.payload };
    }
    case ASYNC_FETCH_WEATHER_DATA_GEOLOCATION_BAN: {
      return { ...state, today: action.payload };
    }
    default:
      return state;
  }
};

export default weatherDataReducer;
