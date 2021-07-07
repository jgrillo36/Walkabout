import React, {useState} from 'react';
import { connect } from 'react-redux'
// import { Link } from react-router;

export const Results = (props) => {
    console.log('resultProps', props)
    const{parks}= props
    console.log('destructoredprops', parks)
   
    
    return (
        <div>
          
                 {parks.map(park =>
             
                    <div>
                    
                        {/* {park.name} */}
                        {park.fullName}
                        {park.entranceFees[0].cost}
                        {park.latLong}
                        {park.activities[0].name}
                        {park.weatherInfo}
                         <a  href={park.url}>text</a>
                         <img src={park.images[0].url}>
                        </img>
                       


                   
                    </div>
                )}


              
          
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)

