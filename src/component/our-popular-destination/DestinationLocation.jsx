import React from 'react'
import arrow from '/src/assets/arrow.svg'


const DestinationLocation = (prop) => {

  // const { LocationCountryName, LocationSpot, LocationDN } = prop

  return (
    <div>
      {/* <img src={LocationImage} alt="locationImage" /> */}
      <div>
        {prop.CountryName} 
      </div>
      <div>
        {prop.Spot} {prop.DN}
      </div>
      {/* <img src={arrow} alt="" /> */}
    </div>
  )
}

export default DestinationLocation

