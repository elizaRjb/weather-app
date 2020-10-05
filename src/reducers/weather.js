import { SET_WEATHER_INFO } from 'actions/weather';

const INITIAL_STATE = {
  current: null,
  daily: null,
  timeZone: ''
};

export default function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_WEATHER_INFO:
      const { weatherInfo } = action;
      return { ...state, current: weatherInfo.current, daily: weatherInfo.daily, timeZone: weatherInfo.timezone };
    default:
      return state;
  }
}
