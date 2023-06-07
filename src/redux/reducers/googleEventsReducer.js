import {
  SET_USER,
  SET_SCHEDULED_EVENTS,
  SET_ALL_EVENTS,
  CLEAR_USER,
  CLEAR_SCHEDULED_EVENTS,
  CLEAR_ALL_EVENTS,
} from '@constants';

const initialState = {
  user: null,
  scheduledEvents: [],
  allEvents: {},
};

export default function googleEventsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    case SET_SCHEDULED_EVENTS:
      return {
        ...state,
        scheduledEvents: action.payload,
      };
    case CLEAR_SCHEDULED_EVENTS:
      return {
        ...state,
        scheduledEvents: [],
      };
    case SET_ALL_EVENTS:
      return {
        ...state,
        allEvents: action.payload,
      };
    case CLEAR_ALL_EVENTS:
      return {
        ...state,
        allEvents: [],
      };
    default:
      return state;
  }
}
