import React, { Component } from 'react'
import Burgers from './Burgers'
import Bites from './Bites'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Menu extends Component {
  render () {
    return <Router>
      <div className='Menu'>
        <div className='menuBox'>
          <h1 className='bodyh1'> Menu </h1>
          <div className='menuLinks'>
            <Link exact to='/menu/bites'> Bites </Link>
            <Link to='/menu/burgers'> Burgers </Link>
          </div>
          <div className='menuItems'>
            <Route exact path='/menu/' component={Bites} />
            <Switch>
              <Route exact path='/menu/bites' component={Bites} />
              <Route exact path='/menu/burgers' component={Burgers} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  }
}

export default Menu
