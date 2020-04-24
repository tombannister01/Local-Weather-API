import React from 'react'
import axios from 'axios'
import moment from 'moment-timezone'
import { Link } from 'react-router-dom'


class SingleCity extends React.Component {

  constructor() {
    super()
    this.state = {
      intervalIdBoolean: true,

      currentDate: '',

      forecast: {
        currently: {},
        daily: {
          data: []
        }
      }
    }
  }


  componentDidMount() {
    const data = this.props.location.state
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b5ed109d2c55c56135ed4fc656a0f25c/${data.city.latlong}`)
      .then(res => {
        this.setState({ forecast: res.data })
        setInterval(() => {
          this.setState({ currentDate: moment().tz(`${this.state.forecast.timezone}`).format('MMMM Do YYYY, h:mm:ss a') })

        }, 1000)
      })
      .catch(err => console.error(err))

  }
  componentWillUnmount() {
    clearInterval(this.state.intervalID)
  }

  render() {
    const forecast = this.state.forecast
    let counter = 0
    let counter2 = 0

    return <>
      <section className="hero is-medium flex-parent">
        <div className="hero-body single-city-background" style={{ backgroundImage: `url(${this.props.location.state.city.image})` }}>
          <div className="container image-container"  >
            <div className="hero-single-title">
              <h1 className="title single-hero-text">
                {this.props.location.state.city.name}
              </h1>
              <h2 className="subtitle single-hero-text">
                <span>{this.state.currentDate}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="fade"></div>
      </section>
      <section className="city">
        <button className="back-to-cities"><p><Link to={'/cities'}>
          {'Return to Cities'}
        </Link></p></button>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                {forecast.currently && <article className="tile is-child box parent">
                  <div className="summary-text">
                    <h3>Current Weather:</h3>
                    <h4>{forecast.currently.summary}</h4>
                    <p className="summary-box">Temperature: {Math.round(((forecast.currently.temperature) - 32) * (5 / 9))}°C</p>
                    <p className="summary-box">Feels like {Math.round(((forecast.currently.apparentTemperature) - 32) * (5 / 9))}°C</p>
                    <p className="summary-box">Chance of rain: {forecast.currently.precipProbability}%</p>
                  </div>
                  <img src={`https://darksky.net/images/weather-icons/${forecast.currently.icon}.png`} alt={forecast.currently.icon} className="icon icon-large" />
                </article>}

                {forecast.minutely && <article className="tile is-child box parent">
                  <div className="summary-text">
                    <h3>In the next hour:</h3>
                    <h4>{forecast.minutely.summary}</h4>
                  </div>
                  <img src={`https://darksky.net/images/weather-icons/${forecast.minutely.icon}.png`} alt={forecast.minutely.icon} className="icon icon-large" />
                </article>}

                {forecast.hourly && <article className="tile is-child box parent">
                  <div className="summary-text">
                    <h3>Rest of the day:</h3>
                    <h4>{forecast.hourly.summary}</h4>
                  </div>
                  <img src={`https://darksky.net/images/weather-icons/${forecast.hourly.icon}.png`} alt={forecast.hourly.icon} className="icon icon-large" />

                </article>}
              </div>
              <div className="tile is-parent vertical">
                {forecast.hourly && <article className="tile is-child box hourly">
                  <h3>The next 48 hours:</h3>
                  {forecast.hourly.data.map((hourly, key) => {
                    return <div key={key} className="hourly-parent reset-button btn btn-white btn-animation-1">
                      <div className="hourly-info">
                        <p className="hourly-forecast">{moment().tz(`${this.state.forecast.timezone}`).add(counter += 1, 'hour').calendar()}</p>
                        <p> {hourly.summary}</p>
                        <p> Temperature: {Math.round(((hourly.temperature) - 32) * (5 / 9))}°C but feels like {Math.round(((hourly.temperature) - 32) * (5 / 9))}°C</p>
                      </div>
                      <img src={`https://darksky.net/images/weather-icons/${hourly.icon}.png`} alt={hourly.icon} className="icon" />
                    </div>
                  })}
                </article>}
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            {forecast.daily && <article className="tile is-child box daily">
              <h3>The next 7 days:</h3>
              {forecast.daily.data.map((daily, key) => {
                return <div key={key} className="hourly-parent reset-button btn btn-white btn-animation-1">
                  <div className="hourly-info">
                    <p className="hourly-forecast">{moment().tz(`${this.state.forecast.timezone}`).add(counter2 += 1, 'day').calendar()}</p>
                    <p>{daily.summary}</p>
                    <p> Highest temperature: {Math.round(((daily.temperatureHigh) - 32) * (5 / 9))}°C, but feels like {Math.round(((daily.apparentTemperatureHigh) - 32) * (5 / 9))}°C</p>
                  </div>
                  <img src={`https://darksky.net/images/weather-icons/${daily.icon}.png`} alt={daily.icon} className="icon" />
                </div>
              })}
            </article>}
          </div>
        </div>
      </section>
    </>
  }
}


export default SingleCity