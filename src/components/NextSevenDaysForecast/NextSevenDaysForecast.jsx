import React, { Component } from 'react';
import { connect } from 'react-redux';

import { convertUnixTimeToLocalDate } from 'utils/utils';

class NextSevenDaysForecast extends Component {
  render() {
    const { dailyForecasts } = this.props;

    if (!dailyForecasts) return null;

    const forecasts = dailyForecasts.slice(1);

    return (
      <div className="card card--lg">
        <h2 className="card__heading card__heading--lg">Next 7 days forecast:</h2>
        <ul className="card__long-list">
          {
            forecasts.map(item => {
              return (
                <li key={item.dt}>
                  <div className="card__block">
                    <h3 className="card__block-heading">{convertUnixTimeToLocalDate(item.dt)}</h3>
                    <div className="card__row">
                      <div className="card__col card__col--left">
                        <img
                          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                          alt={item.weather[0].description}
                        />
                        <p className="card__main-text">{item.weather[0].description}</p>
                      </div>
                      <div className="card__col card__col--right">
                        <div className="card__row card__row--sm">
                          <div className="card__col card__col--sm"><strong>Min:</strong> {item.temp.min}&deg;C</div>
                          <div className="card__col card__col--sm"><strong>Max:</strong> {item.temp.max}&deg;C</div>
                        </div>
                        <div className="card__row card__row--sm">
                          <div className="card__col card__col--sm"><strong>Day:</strong> {item.temp.day}&deg;C</div>
                          <div className="card__col card__col--sm"><strong>Night:</strong> {item.temp.night}&deg;C</div>
                        </div>
                        <div className="card__row card__row--sm">
                          <div className="card__col card__col--sm"><strong>Humidity:</strong> {item.humidity}%</div>
                          <div className="card__col card__col--sm"><strong>Dew point:</strong> {item.dew_point}&deg;C</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dailyForecasts: state.weather.daily
})

export default connect(mapStateToProps, null)(NextSevenDaysForecast);