import React, { Component } from 'react'

class Bites extends Component {
  render () {
    return <div className='menuItems'>
      <div className='singleItem'>
        <span className='spanTitle'> Homestead Guacamole </span>
        <span> Avocados mixed with chopped white onions,
          red pepper, cilantro, and pickled relish with a
          squeeze of lime served with homemade salsa and warm
          tortilla chips.</span>
        <span> <b> $11 </b> </span>
      </div>

      <div className='singleItem'>
        <span className='spanTitle'> Florida Alligator Bites </span>
        <span> Fresh local alligator from Cypress Creek Farms in Starke,
          Fl. Fried and seasoned with Old Bay, served with creamy garlic
          and spicy mayo. </span>
        <span> <b> $13 </b> </span>
      </div>
    </div>
  }
}

export default Bites
