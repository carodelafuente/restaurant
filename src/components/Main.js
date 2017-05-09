import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
  render () {
    return <div className='Main'>
      <div className='navBar'>
        <div className='links'>
          <Link to='/'> Home </Link>
          <Link to='/menu'> Menu </Link>
        </div>
        <span className='logo'> Soma </span>
        <div className='links'>
          <Link to='/about'> About </Link>
          <Link to='/contact'> Contact </Link>
        </div>
      </div>
    </div>
  }
}

export default Main
