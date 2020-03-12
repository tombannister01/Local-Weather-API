import React from 'react'
import axios from 'axios'
import moment from 'moment-timezone'


class SingleCity extends React.Component {


  constructor() {
    super()
    this.state = {
      intervalIdBoolean: true,

      currentDate: '',

      forecast: {
        currently: {}
      }
    }
  }

  // moment.tz.format('MMMM Do YYYY, h:mm:ss a', `"${this.state.forecast.timezone}"`),

  componentDidMount() {
    const data = this.props.location.state
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b5ed109d2c55c56135ed4fc656a0f25c/${data.city.latlong}`)
      .then(res => {
        this.setState({ forecast: res.data })
        setInterval(() => {
          // const date = this.state.forecast.c
          this.setState({ currentDate: moment().tz(`${this.state.forecast.timezone}`).format('MMMM Do YYYY, h:mm:ss a') })
          // this.setState({ currentDate: moment.tz(this.state.forecast.currently.time, `${this.state.forecast.timezone}`).format('MMMM Do YYYY, h:mm:ss a') })

        }, 1000)
      })
      .catch(err => console.error(err))

  }

  // componentDidUpdate() {
  //   this.setState({
  //     currentDate: setInterval(() => {
  //       moment().format('MMMM Do YYYY, h:mm:ss a')
  //     }, 1000)
  //   })
  // }





  componentWillUnmount() {
    clearInterval(this.state.intervalID)
  }

  render() {
    // console.log(this.state.currentDate)
    const forecast = this.state.forecast
    // console.log(forecast)
    let counter = 0
    // this.setState({ currentDate: setInterval(() => {
    //   moment().format('MMMM Do YYYY, h:mm:ss a')
    // }, 1000) })

    // const  { summary, icon, temperature, apparentTemperature, precipProbability } = forecast.hourly.data
    if (!forecast) return null
    // console.log('current', forecast.currently)
    // console.log('daily', forecast.daily)
    // console.log('hourly', forecast.hourly)
    // console.log('current', forecast.minutely)
    // console.log( setInterval(() => {
    //   moment().format('MMMM Do YYYY, h:mm:ss a')
    // }, 1000))

    document.querySelector('.container')
    return <>
      <>
        {console.log(this.props.location.state.city.image)}
      </>      <section className="hero is-medium">
        <div className="hero-body single-city-background" style={{ backgroundImage: `url(${this.props.location.state.city.image})` }}>
          <div className="container image-container"  >



            {/* //   ...container.style.background-image = {this.props.location.state.city.image}
          // }> */}


            <h1 className="title homepage-text">
              {this.props.location.state.city.name}
            </h1>
            <h2 className="subtitle homepage-text">
              Hero subtitle
            </h2>
          </div>
        </div>
      </section>

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                {this.props.location.state.city.name}
                {/* <img src={this.props.location.state.city.image} /> */}
              </article>
              <article className="tile is-child box">
                {/* {forecast.timezone} */}
                {/* { setInterval(() => { */}
                {this.state.currentDate}
                {/* {`${this.state.currentDate}.tz('${this.state.forecast.timezone}').format('MMMM Do YYYY, h:mm:ss a')`} */}
                {/* {this.setState.({ currentDate })} */}
                {/* }, 1000)} */}
              </article>
              {forecast.currently && <article className="tile is-child box">
                <h3>Current Weather</h3>
                <h4>{forecast.currently.summary}</h4>
                {/* <img src={`https://img.icons8.com/ios/50/000000/${forecast.currently.icon}.png`} alt={forecast.currently.icon} /> */}
                <img src={`https://darksky.net/images/weather-icons/${forecast.currently.icon}.png`} alt={forecast.currently.icon} className="icon"/>

                <p>Temperature: {Math.round(forecast.currently.temperature)}°C</p>
                <p>Feels like {Math.round(forecast.currently.apparentTemperature)}°C</p>
                <p>Chance of rain: {forecast.currently.precipProbability}%</p>
              </article>}

              {forecast.minutely && <article className="tile is-child box">
                <h3>In the next hour</h3>
                <h4>{forecast.minutely.summary}</h4>
                {/* <img src={`https://img.icons8.com/ios/50/000000/${forecast.minutely.icon}.png`} alt={forecast.minutely.icon} /> */}
                <img src={`https://darksky.net/images/weather-icons/${forecast.minutely.icon}.png`} alt={forecast.minutely.icon} className="icon"/>

              </article>}

              {forecast.hourly && <article className="tile is-child box">
                <h3>Rest of the day</h3>
                <h4>{forecast.hourly.summary}</h4>
                {/* <img src={`https://img.icons8.com/ios/50/000000/${forecast.hourly.icon}.png`} alt={forecast.hourly.icon} /> */}
                <img src={`https://darksky.net/images/weather-icons/${forecast.hourly.icon}.png`} alt={forecast.hourly.icon} className="icon"/>

              </article>}
            </div>
            <div className="tile is-parent vertical">
              {forecast.daily && <article className="tile is-child box hourly">
                The next 48 hours:
                {forecast.daily.summary}
                {forecast.hourly.data.map((hourly, key) => {
                  return <p key={key} className="hourly-forecast">{moment().tz(`${this.state.forecast.timezone}`).add(counter += 1, 'hour').calendar()} - {hourly.summary} - {Math.round(hourly.temperature)}°C - <img src={`https://darksky.net/images/weather-icons/${hourly.icon}.png`} alt={hourly.icon} className="icon"/>

                  </p>
                })}
              </article>}

              {forecast.hourly && <article className="tile is-child box hourly">
                Rest of the day
                {forecast.hourly.summary}
              </article>}

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
    </>

  }




}


export default SingleCity