import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Main extends Component {
  render () {
    return <div className='Main'>
      <div className='navBar'>
        <div className='links'>
          <a href='#'> <Link to='/'> Home </Link> </a>
          <a href='#'> <Link to='/menu'> Menu </Link> </a>
        </div>
        <span className='logo'> Soma </span>
        <div className='links'>
          <a href='#'> <Link to='/about'> About </Link> </a>
          <a href='#'> <Link to='/contact'> Contact </Link> </a>
        </div>
      </div>
    </div>
  }
}

export default Main
