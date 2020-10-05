export const SET_WEATHER_INFO = 'SET_WEATHER_INFO';

export function setWeatherInfo(weatherInfo) {
  return {
    type: SET_WEATHER_INFO,
    weatherInfo
  }
};