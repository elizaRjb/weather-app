import { SET_LOCATION } from 'actions/location';

const INITIAL_STATE = null

export default function location(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOCATION:
      const { locationInfo } = action;

      return locationInfo ? { ...state, lon: locationInfo.lon, lat: locationInfo.lat } : { ...state, lon: '', lat: '' };
    default:
      return state;
  }
}
