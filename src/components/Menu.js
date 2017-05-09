import React, { Component } from 'react'

class Menu extends Component {
  render () {
    return <div className='Menu'>
      <h1> Menu </h1>
      <div className='menuItems'>
        <div className='singleItem'>
          <span className='spanTitle'> Classic Burger </span>
          <span> Burger topped with lettuce, tomato,
        sliced white onions, pickles, melted sharp cheddar,
        yellow mustard and mayo, served on a challah bun. </span>
          <span> <b> $14 </b> </span>
        </div>

        <div className='singleItem'>
          <span className='spanTitle'> LoKal </span>
          <span> Florida grass-fed burger served with
          homemade honey mustard, using local honey,
          melted jack cheese, local tomato’s, sliced red onions,
          arugula and Florida avocados. </span>
          <span> <b> $15 </b> </span>
        </div>
      </div>
    </div>
  }
}

export default Menu
