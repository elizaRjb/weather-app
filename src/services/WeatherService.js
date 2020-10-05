import { fetchWeatherInfo } from 'services/HttpService';

export const getWeatherInfo = async (options, callbackSuccess = null, callbackError = null) => {
  try {
    const searchResults = await fetchWeatherInfo(options);

    callbackSuccess(searchResults.data);
  } catch (err) {
    callbackError(err);

    console.log('Error in weather info results: ', err);
  }
};
