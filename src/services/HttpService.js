import http from 'utils/http';

export async function fetchWeatherInfo(options = {}) {
  const weatherInfo = await http.get('https://api.openweathermap.org/data/2.5/onecall', {
    params: {
      lat: options.lat,
      lon: options.lon,
      appid: '7bd345529c3c7e273b09dc8691941757',
      units: 'metric'
    }
  });

  return weatherInfo;
}

export async function fetchLocationSearchResults(options = {}) {
  const weatherInfo = await http.get('https://app.geocodeapi.io/api/v1/search', {
    params: {
      apikey: '64b89b80-063e-11eb-962d-3b45eff6715a',
      text: options.text
    }
  });

  return weatherInfo;
}
