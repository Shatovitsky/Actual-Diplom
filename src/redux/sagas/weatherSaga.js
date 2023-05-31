import {
  searchDataSys,
  fetchHourlyWeather,
  geolocationBanData,
  fetchWeeklyWeather,
  currentWeather,
  searchData,
  searchDataTemp,
  searchDataMainImg,
  searchDataDaily,
  searchDataHourly,
  searchNameWeather,
} from '@actions';
import getCurrentLocation from '@API/getCurrentLocation';
import getDataWeather from '@API/getDataWeather';
import {
  getHourlyWeather,
  getDailyWeather,
  getStaticCityWeather,
  getStaticDailyWeather,
  getStaticHourlyWeather,
} from '@API/weather';
import {
  ASYNC_FETCH_WEATHER_DATA,
  FETCH_WEEKLY_WEATHER,
  FETCH_WEEKLY_WEATHER_SUCCESS,
  FETCH_HOURLY_WEATHER_SUCCESS,
  config,
} from '@constants';

import { takeEvery, put, call } from '@redux-saga/core/effects';

function* fetchWeatherDataWorker() {
  try {
    const position = yield call(getCurrentLocation);
    const weatherData = yield call(getDataWeather, position.coords);
    const hourly = yield call(getHourlyWeather, weatherData);
    const daily = yield call(getDailyWeather, weatherData);
    yield put(fetchHourlyWeather(hourly.list));
    yield put(fetchWeeklyWeather(daily.data));
    yield put(currentWeather(weatherData));
    yield put(searchData(weatherData.name));
    yield put(searchDataTemp(weatherData.main.temp));
    yield put(searchDataSys(weatherData.sys.country));
    yield put(searchDataMainImg(weatherData.weather[0].icon));
    yield put(searchDataDaily(daily.data));
    yield put(searchDataHourly(hourly.list));
    yield put(searchNameWeather(weatherData.weather[0].main));
  } catch (e) {
    const staticCityDaily = yield call(getStaticDailyWeather);
    const staticCityData = yield call(getStaticCityWeather);
    const staticCityHourly = yield call(getStaticHourlyWeather);
    yield put(fetchHourlyWeather(staticCityHourly.list));
    yield put(fetchWeeklyWeather(staticCityDaily.data));
    yield put(geolocationBanData(staticCityData));
    yield put(searchData(staticCityData.name));
    yield put(searchDataSys(staticCityData.sys.country));
    yield put(searchDataTemp(staticCityData.main.temp));
    yield put(searchDataMainImg(staticCityData.weather[0].icon));
    yield put(searchNameWeather(staticCityData.weather[0].main));
  }
}

function* fetchWeeklyWeatherData(cityName) {
  try {
    const response = yield call(
      fetch,
      `${config.apiOpenweatherUrl}forecast?q=${cityName}&appid=${config.apiKeyOpenweather}`,
    );
    const data = yield response.json();
    yield put({ type: FETCH_WEEKLY_WEATHER_SUCCESS, payload: data });
  } catch (e) {
    console.error(e);
  }
}

function* fetchHourlyWeatherData(action) {
  try {
    const response = yield call(
      fetch,
      `${config.apiOpenweatherUrl}forecast/hourly?q=${action.payload}&appid=${config.apiKeyOpenweather}&units=metric`,
    );
    const data = yield response.json();
    yield put({ type: FETCH_HOURLY_WEATHER_SUCCESS, payload: data });
  } catch (e) {
    console.error(e);
  }
}

export function* weatherWatcher() {
  yield takeEvery(ASYNC_FETCH_WEATHER_DATA, fetchWeatherDataWorker);
}

export function* watchWeeklyWeather() {
  yield takeEvery(FETCH_WEEKLY_WEATHER, fetchWeeklyWeatherData);
}

export function* watchHourlyWeather() {
  yield takeEvery(FETCH_HOURLY_WEATHER_SUCCESS, fetchHourlyWeatherData);
}
