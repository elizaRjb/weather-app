import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from 'utils/store';

import MainPage from 'views/MainPage';

import 'assets/sass/style.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MainPage />
        </div>
      </Provider>
    )
  }
}

export default App;
