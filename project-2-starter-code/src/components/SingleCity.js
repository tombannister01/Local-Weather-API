import React from 'react'
import axios from 'axios'

class SingleCity extends React.Component {


  constructor() {
    super()
    this.state = {
      intervalIdBoolean: true,
      intervalID: setInterval(() => {
        console.log(new Date(Date.now()))
      }, 1000),
      forecast: {
        currently: {},
        minutely: {},
        hourly: {
          data: []
        },
        daily: {}
      }
    }
  }


  componentDidMount() {
    // clearInterval(this.state.intervalID)
    const data = this.props.location.state
    // console.log(data.city.latlong)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b5ed109d2c55c56135ed4fc656a0f25c/${data.city.latlong}`)
      .then(res => this.setState({ forecast: res.data }))
      .catch(err => console.error(err))


  



  }



  componentWillUnmount() {
    clearInterval(this.state.intervalID)
  }




  render() {
    const forecast = this.state.forecast
    // console.log(forecast)
    let counter = 0






    // const  { summary, icon, temperature, apparentTemperature, precipProbability } = forecast.hourly.data
    if (!forecast) return <h1>hello</h1>
    // console.log(

    return <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child box">
              {this.props.location.state.city.name}
              <img src={this.props.location.state.city.image} />
            </article>
            <article className="tile is-child box">
              {forecast.timezone}
            </article>
            <article className="tile is-child box">
              Current Weather
              {forecast.currently.summary}
              <img src={`https://icons8.com/icon/658/${forecast.currently.icon}`} />
              Temperature: {Math.round(forecast.currently.temperature)}°C
              Feels like {Math.round(forecast.currently.apparentTemperature)}°C
              Chance of rain: {forecast.currently.precipProbability}%

            </article>
            <article className="tile is-child box">
              In the next hour
              {forecast.minutely.summary}
              {forecast.minutely.icon}
            </article>
            <article className="tile is-child box">
              Rest of the day
              {forecast.hourly.summary}


            </article>
          </div>
          <div className="tile is-parent vertical">
            <article className="tile is-child box hourly">
              The next 24 hours:
              {forecast.daily.summary}
              {forecast.hourly.data.map((hourly, key) => {
                return <p key={key}>Hour {counter += 1}:00 - {hourly.summary} - {Math.round(hourly.temperature)}°C</p>
              })}

            </article>
            <article className="tile is-child box hourly">
              Rest of the day
              {forecast.hourly.summary}


            </article>
          </div>
        </div>
        {/* <div className="tile is-parent">
          <article className="tile is-child box">

          </article>
        </div> */}
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          Hello news
        </article>
      </div>
    </div>

  }




}


export default SingleCity