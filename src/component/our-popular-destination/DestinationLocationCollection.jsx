import React from 'react'
import DestinationLocation from './DestinationLocation'
// import {collections} from './DestinationCollection.jsx'

const DestinationLocationCollection = () => {
    collections = [
        {
            LocationIndex: 0,
            LocationImage: thailand,
            LocationCountryName: "Thailand",
            LocationSpot: "20+ spots",
            LocationDN: "2D & 3D"
        },
    
        {
            LocationIndex: 1,
            LocationImage: indo,
            LocationCountryName: "Indonesia",
            LocationSpot: "25+ spots",
            LocationDN: "3D & 3N"
        },
    
        {
            LocationIndex: 2,
            LocationImage: newzealand,
            LocationCountryName: "New Zealand",
            LocationSpot: "20+ spots",
            LocationDN: "4D & 5N "
        }
    ]
    return (
        <>
            {
                collections.map((element) => {
                    return (
                        <DestinationLocation
                            // element={element}
                            CountryName = {element.LocationCountryName}
                            Spot = {element.LocationSpot} 
                            DN = {element.LocationDN}
                            // LocationImage = {element.LocationImage}
                            key={element.LocationIndex}
                        />

                    )
                }
                )
            }
        </>
    )
}

export default DestinationLocationCollection