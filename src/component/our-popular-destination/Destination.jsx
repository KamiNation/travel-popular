import React from 'react'
import DestinationLocation from './DestinationLocation'
// import DestinationMap from './DestinationMap'
import "./Destination.css"

const Destination = () => {
  return (
    <section className='destination'>
        <h1>Our Popular Destination and Advisors</h1>
        {/* <DestinationMap/> */}
        <DestinationLocation/>
    </section>
  )
}

export default Destination