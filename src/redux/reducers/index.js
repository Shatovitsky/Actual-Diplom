import { combineReducers } from 'redux';

import googleEventsReducer from './googleEventsReducer';
import hourlyWeatherReducer from './hourlyWeatherReducer';
import searchWeatherDataReducer from './searchWeatherDataReducer';
import weatherDataReducer from './weatherDataReducer';
import weeklyWeatherReducer from './weeklyWeatherReducer';

const rootReducer = combineReducers({
  weather: weatherDataReducer,
  weeklyWeather: weeklyWeatherReducer,
  hourlyWeather: hourlyWeatherReducer,
  searchData: searchWeatherDataReducer,
  googleCalendar: googleEventsReducer,
});

export default rootReducer;
