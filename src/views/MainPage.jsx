import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLocation } from 'actions/location';

import Search from 'components/Search/Search';
import Header from 'components/Header/Header';

import WeatherDetails from './WeatherDetails';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: this.props.location
    }
  }

  componentDidMount() {
    const { setLocation } = this.props;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }

        setLocation(location);
        this.setState({ location });
      })
    } else {
      setLocation({});
    }
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <Search />
          {
            location ? <WeatherDetails />: <p className="message">Please search for a location.</p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
