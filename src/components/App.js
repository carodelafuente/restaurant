import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Main />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  }
}

export default App
