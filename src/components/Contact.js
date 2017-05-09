import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return <div className='Contact'>
      <div className='contactBox'>
        <div className='contact'>
          <h1 className='bodyh1'>Contact</h1>
          <span> (305) 000-0000  | info@soma.com  |  No Reservations available
        </span>
        </div>
        <div>
          <h1 className='bodyh1'> Hours </h1>
          <div className='hoursBox'>
            <span> <b>Sunday - Tuesday: </b> 12 pm - 11 pm </span>
            <span> <b>Wednesday - Thursday: </b> 12 pm - Midnight (Kitchen closes at 11pm) </span>
            <span> <b>Friday - Saturday: </b> 12 pm - 1 am </span>
            <span> <b>Closed: </b> 4th of July | Thanksgiving | Christmas Eve | Christmas Day
          </span>
          </div>

          <div className='locationBox'>
            <h1 className='bodyh1'> Location </h1>
            <span> Insert Google Map Here </span>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Contact
