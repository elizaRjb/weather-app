export const SET_LOCATION = 'SET_LOCATION';

export function setLocation(locationInfo) {
  return {
    type: SET_LOCATION,
    locationInfo
  }
};
