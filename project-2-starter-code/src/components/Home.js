import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title has-text-centered homepage-text">
          Weather API
        </h1>
        <h4 className="subtitle has-text-centered homepage-text">
          Powered by DarkSky
        </h4>
        <button className="button is-normal">
          <Link to={'/cities'}>
            {'Cities'}
          </Link>
        </button>




      </div>
    </div>
  </section>

)

export default Home