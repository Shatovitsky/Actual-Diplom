import {
  SET_ALL_EVENTS,
  SET_USER,
  CLEAR_USER,
  SET_SCHEDULED_EVENTS,
  CLEAR_ALL_EVENTS,
  CLEAR_SCHEDULED_EVENTS,
} from '../../constants';

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});
export const setAllEvents = (allEvents) => ({
  type: SET_ALL_EVENTS,
  payload: allEvents,
});

export const setScheduledEvents = (events) => ({
  type: SET_SCHEDULED_EVENTS,
  payload: events,
});

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

export const clearAllEvents = () => {
  return {
    type: CLEAR_ALL_EVENTS,
  };
};
export const clearScheduledEvents = () => {
  return {
    type: CLEAR_SCHEDULED_EVENTS,
  };
};
