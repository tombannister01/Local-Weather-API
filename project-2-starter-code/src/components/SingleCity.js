import React from 'react'
import axios from 'axios'

class SingleCity extends React.Component {


  constructor() {
    super()
    this.state = {
      forecast: {}
    }
  }


  componentDidMount() {
    console.log(this.props)
    const data = this.props.location.state
    console.log(data.city.latlong)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/b5ed109d2c55c56135ed4fc656a0f25c/${data.city.latlong}`, )
      .then(res => this.setState({ forecast: res.data }))
      .catch(err => console.error(err))

  }


  render() {
    const forecast = this.state.forecast
    console.log(forecast)
    if (!forecast) return null

    return <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child box">
              {this.props.location.state.city.name}
            </article>
            <article className="tile is-child box">
              {forecast.timezone}
            </article>
            <article className="tile is-child box">
              Hello  hourly
            </article>
            <article className="tile is-child box">
              Hello  daily
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <img src={this.props.location.state.city.image}/>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            Hello 7 day cast
          </article>
        </div>
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