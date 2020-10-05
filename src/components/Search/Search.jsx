import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLocation } from 'actions/location';
import { setWeatherInfo } from 'actions/weather';

import { getWeatherInfo } from 'services/WeatherService';
import { getLocationSearchResults } from 'services/LocationService';

import SearchList from './SearchList';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      emptyMessage: '',
      searchResults: [],
      showSearchList: false,
      isLoading: false,
      error: false
    }
  }

  handleSearchOnChange = e => {
    const text = e.target.value;

    this.setState({ searchText: text })

    if (text.trim().length <= 2) return;

    const callbackSuccess = data => {
      this.setState({ showSearchList: true });

      if (!data.length) {
        this.setState({ searchResults: [], emptyMessage: 'The location could not be found.' });
        return;
      }

      this.setState({ searchResults: data, emptyMessage: '' });
    }

    getLocationSearchResults({ text }, callbackSuccess);
  }

  handleOptionClick = details => {
    const { setLocation, setWeatherInfo } = this.props;

    this.setState({ searchText: details.name, isLoading: true })

    const callbackSuccess = data => {
      setLocation(details.location)
      setWeatherInfo(data)
      this.setState({ showSearchList: false, isLoading: false, error: false });
    };

    const callbackError = () => {
      this.setState({ showSearchList: false, isLoading: false, error: true });
    };

    getWeatherInfo(details.location, callbackSuccess, callbackError);
  }

  render() {
    const { searchText, searchResults, emptyMessage, showSearchList, isLoading, error } = this.state;

    return (
      <div className="search">
        <input
          type="search"
          placeholder="Search location, zip..."
          onChange={this.handleSearchOnChange}
          value={searchText}
          className="search__form-control"
        />
        {error && <p className="error error--sm">There was a problem fetching the latest weather details. Please try again later.</p>}
        {
          showSearchList &&
          <SearchList onClick={this.handleOptionClick} results={searchResults} message={emptyMessage} isLoading={isLoading} />
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location)),
  setWeatherInfo: info => dispatch(setWeatherInfo(info))
})

export default connect(null, mapDispatchToProps)(Search);