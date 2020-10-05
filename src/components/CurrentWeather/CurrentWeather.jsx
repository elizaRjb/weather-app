import React from 'react';
import { connect } from 'react-redux';

import { convertUnixTimeToLocalTime } from 'utils/utils';

const CurrentWeather = props => {

  const { currentWeather, timeZone } = props;

  if (currentWeather) {
    const currentDate = convertUnixTimeToLocalTime(currentWeather.dt)

    return (
      <div className="card">
        <h2 className="card__heading">Current Weather</h2>
        <span className="card__sub-text">{currentDate}</span>
        <div className="card__row">
          <div className="card__col">
            <div className="card__block">
              <h3 className="card__block-heading">{timeZone}</h3>
              <div className="card__details">
                <img
                  src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                  alt={currentWeather.weather[0].description}
                />
                <span>{currentWeather.temp}&deg;C</span>
              </div>
              <p className="card__main-text">{currentWeather.weather[0].description}</p>
            </div>
          </div>
          <div className="card__col">
            <ul className="card__list">
              <li>
                <div className="card__list-col">Humidity:</div>
                <div className="card__list-col">{currentWeather.humidity}%</div>
              </li>
              <li>
                <div className="card__list-col">Dew point:</div>
                <div className="card__list-col">{currentWeather.dew_point}&deg;C</div>
              </li>
              <li>
                <div className="card__list-col">Pressure:</div>
                <div className="card__list-col">{currentWeather.pressure}hPa</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return null;
}

const mapStateToProps = state => ({
  location: state.location,
  timeZone: state.weather.timeZone,
  currentWeather: state.weather.current
});

export default connect(mapStateToProps, null)(CurrentWeather);
