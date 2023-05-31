import {
  ASYNC_FETCH_WEATHER_DATA_GEOLOCATION_BAN,
  GET_CURRENT_WEATHER_DATA_SUCCEEDED,
  ASYNC_FETCH_WEATHER_DATA,
  FETCH_WEEKLY_WEATHER,
  FETCH_HOURLY_WEATHER_SUCCESS,
  ASYNC_FETCH_WEATHER_SEARCH_DATA_CITY,
  FETCH_WEEKLY_WEATHER_SUCCESS,
  ASYNC_FETCH_WEATHER_SEARCH_DATA_SYS,
  ASYNC_FETCH_WEATHER_SEARCH_DATA_TEMP,
  ASYNC_FETCH_WEATHER_SEARCH_DATA_IMG,
  ASYNC_FETCH_WEATHER_SEARCH_DAILY,
  ASYNC_FETCH_WEATHER_SEARCH_HOURLY,
  ASYNC_FETCH_WEATHER_SEARCH_NAME_WEATHER,
  SET_ALL_EVENTS,
  SET_USER,
  SET_SCHEDULED_EVENTS,
  ADD_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
} from '../../constants';

export const currentWeather = (payload) => ({
  type: GET_CURRENT_WEATHER_DATA_SUCCEEDED,
  payload,
});

export const fetchWeatherData = () => ({
  type: ASYNC_FETCH_WEATHER_DATA,
});
export const geolocationBanData = (payload) => ({
  type: ASYNC_FETCH_WEATHER_DATA_GEOLOCATION_BAN,
  payload,
});

export const searchData = (payload) => ({
  type: ASYNC_FETCH_WEATHER_SEARCH_DATA_CITY,
  payload,
});
export const searchNameWeather = (payload) => ({
  type: ASYNC_FETCH_WEATHER_SEARCH_NAME_WEATHER,
  payload,
});
export const searchDataSys = (payload) => ({
  type: ASYNC_FETCH_WEATHER_SEARCH_DATA_SYS,
  payload,
});
export const searchDataTemp = (payload) => ({
  type: ASYNC_FETCH_WEATHER_SEARCH_DATA_TEMP,
  payload,
});
export const searchDataMainImg = (payload) => ({
  type: ASYNC_FETCH_WEATHER_SEARCH_DATA_IMG,
  payload,
});
export const searchDataDaily = (payload) => ({
  type: ASYNC_FETCH_WEATHER_SEARCH_DAILY,
  payload,
});
export const searchDataHourly = (payload) => ({
  type: ASYNC_FETCH_WEATHER_SEARCH_HOURLY,
  payload,
});
// USER AND GOOGLE EVENTS
// Действие для установки данных о пользователе
const setUser = (userData) => ({
  type: actionTypes.SET_USER,
  payload: userData,
});

// Действие для установки запланированных событий
const setScheduledEvents = (events) => ({
  type: actionTypes.SET_SCHEDULED_EVENTS,
  payload: events,
});

// Действие для установки всех событий
const setAllEvents = (events) => ({
  type: actionTypes.SET_ALL_EVENTS,
  payload: events,
});

// Действие для добавления события
const addEvent = (event) => ({
  type: actionTypes.ADD_EVENT,
  payload: event,
});

// Действие для удаления события
const deleteEvent = (eventId) => ({
  type: actionTypes.DELETE_EVENT,
  payload: eventId,
});

// Действие для обновления события
const updateEvent = (eventId, updatedEvent) => ({
  type: actionTypes.UPDATE_EVENT,
  payload: {
    id: eventId,
    updatedEvent,
  },
});
// DAILY AND HOURLY

export const fetchWeeklyWeather = (payload) => ({
  type: FETCH_WEEKLY_WEATHER_SUCCESS,
  payload,
});

export const fetchHourlyWeather = (payload) => ({
  type: FETCH_HOURLY_WEATHER_SUCCESS,
  payload,
});
