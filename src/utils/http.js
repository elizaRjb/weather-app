import axios from 'axios';

/**
 * Http Utility.
 */
const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export { http as default };
