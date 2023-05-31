import { all, call } from 'redux-saga/effects';

import {
  weatherWatcher,
  watchWeeklyWeather,
  watchHourlyWeather,
} from './weatherSaga';

export default function* rootSaga() {
  yield all(
    [call(weatherWatcher)],
    [(call(watchWeeklyWeather), call(watchHourlyWeather))],
  );
}
