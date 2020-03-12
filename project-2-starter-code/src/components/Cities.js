import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Cities extends React.Component {

  constructor() {
    super()
    this.state = {

      cityInfo: {
        // 'Paris', 'Berlin', 'Milan', 'Melbourne', 'Beijing', 'Tokyo', 'Delhi', 'Mexico City', 'Buenos Aires'
        cityArray: [
          { name: 'London', latlong: '51.507351,-0.127758', image: 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg' },
          { name: 'San Francisco', latlong: '37.774929,-122.419418', image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/16/15/san-francisco.jpg?w968h681' },
          { name: 'New York', latlong: '40.712776,-74.005974', image: 'https://www.gannett-cdn.com/media/2018/12/15/USATODAY/usatsports/MotleyFool-TMOT-657f0436-21e9af86.jpg' },
          { name: 'Paris', latlong: '48.856613,-2.352222', image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
          { name: 'Berlin', latlong: '52.520008,13.404954', image: 'https://media.timeout.com/images/105303515/630/472/image.jpg' },
          { name: 'Milan', latlong: '45.464664,9.188540', image: 'https://specials-images.forbesimg.com/imageserve/493223692/960x0.jpg?fit=scale' },
          { name: 'Sydney', latlong: '33.8688,151.2093', image: 'https://images.unsplash.com/photo-1524293581917-878a6d017c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' },
          { name: 'Beijing', latlong: '39.9042,116.4074', image: 'https://www.omm.com/~/media/images/site/locations/beijing_780x520px.ashx' },
          { name: 'Tokyo', latlong: '35.6762,139.6503', image: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Japan/Tokyo/tokyo-guide-shopping-lead.jpg' },
          { name: 'Dubai', latlong: '25.2048,55.2708', image: 'https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg' },
          { name: 'Mexico City', latlong: '19.4326,99.1332', image: 'https://nomadlist.com/assets/img/cities/mexico-city-mexico-500px.jpg' },
          { name: 'Buenos Aires', latlong: '34.6037,58.3816', image: 'https://lp-cms-production.imgix.net/2019-06/4c410251e0146b2edd2b8b1d64a02047-buenos-aires.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4' }

        ]
      }
    }
  }

  render() {
 
    return <>
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title homepage-text">
              Hero title
            </h1>
            <h2 className="subtitle homepage-text">
              Hero subtitle
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.cityInfo.cityArray.map((city, key) => {
              return <div className="column is-one-third" key={key}>
                <Link
                  // to={`cities/${city.name}`}
                  // {...this.props.city}
                  to={{
                    pathname: `cities/${city.name}`,
                    state: { city } 
                  }}

                >
                  <div className="card"

                  >

                    <div className="card-image ">
                      <figure className="image is-4by3">
                        <img src={city.image} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <h2 className="subtitle">{city.name}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            })}



          </div>
        </div>
      </section>
    </>

  }
}

export default Cities