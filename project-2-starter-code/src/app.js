import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'

import Home from './components/Home'
import Cities from './components/Cities'
import SingleCity from './components/SingleCity'

const App = () => (
  <BrowserRouter>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/cities/:city" component={SingleCity} />
      <Route exact path="/cities" component={Cities} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)