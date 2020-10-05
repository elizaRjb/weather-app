

import { fetchLocationSearchResults } from 'services/HttpService';

export const getLocationSearchResults = async (options, callbackSuccess = null, callbackError = null) => {
  try {
    const searchResults = await fetchLocationSearchResults(options);

    callbackSuccess(searchResults.data.features);
  } catch (err) {
    callbackError(err);

    console.log('Error in location search results: ', err);
  }
};
