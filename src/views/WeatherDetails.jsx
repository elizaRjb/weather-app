import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setWeatherInfo } from 'actions/weather';

import { getWeatherInfo } from 'services/WeatherService';

import Loading from 'components/Loading/Loading';
import CurrentWeather from 'components/CurrentWeather/CurrentWeather';
import NextSevenDaysForecast from 'components/NextSevenDaysForecast/NextSevenDaysForecast';

class WeatherDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: false
    }
  }

  componentDidMount() {
    const { location, setWeatherInfo } = this.props;

    const callbackSuccess = data => {
      this.setState({ isLoading: false });
      setWeatherInfo(data);
    }

    const callbackError = () => {
      this.setState({ error: true, isLoading: false });
    }

    if (location) {
      getWeatherInfo(location, callbackSuccess, callbackError);
    } else {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { isLoading, error } = this.state;

    if (isLoading) return <Loading message="Fetching weather details..." />;

    return (
      error ? <div className="error">Something went wrong. Please try again later.</div> : (
        <div>
          <CurrentWeather />
          <NextSevenDaysForecast />
        </div>
      )
    )
  }
}

const mapStateToProps = state => ({
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  setWeatherInfo: info => dispatch(setWeatherInfo(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);
