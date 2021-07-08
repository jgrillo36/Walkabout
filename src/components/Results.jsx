import React, {useState} from 'react';
import { connect } from 'react-redux'
import { setLocation } from '../redux/actions'; 

export const Results = (props) => {
    console.log('resultProps', props)
    const{parks}= props
    // const [parkId,setparkId] = useState('')
    // const [fullName,setfullName] = useState('')
    // const [stateCode,setstateCode] = useState('')
    // const[parkCode,setparkcode]  = useState ('')
    const handleClick= (id,fullName,parkCode,stateCode) => { 
        console.log('buttonClick',id,fullName,parkCode,stateCode)
        setLocation({ 
            id: id,
            fullName: fullName,
            parkCode: parkCode,
            stateCode: stateCode,
         })

    }
  
    
    return (
        <div>
        
          
                 {parks.map(park =>
             
                    <div id={park.id}>
                        <p>{park.fullName}</p>
                        <p>{park.parkCode}</p>
                        <p>{park.states}</p>
                    
                        <p>{park.entranceFees[0].cost}</p>
                       <p>{park.latLong}</p> 
                        <p>{park.activities[0].name}</p>
                        {/* <p>{park.weatherInfo}</p> */}
                         <button type= 'button' onClick= {()=> handleClick(park.id,park.fullName,park.parkCode,park.states)} >Click here for more info on this park</button>
                         <img src={park.images[0].url}>
                        </img>
                     </div>
                )}


              
          
            
        </div>
    )
}



export default connect(null, {setLocation})(Results)
// {/* <div class="card border-2 cardshadow" style="width: 18rem; margin: 0.3em;">
        //    <img class="card-img-top" height=150px width=200px src="${event.image}" alt="Card image cap">
        //     <div class="card-body">
        //    <h5 class="card-title">${state.parks}</h5>
        //    <p class="card-text">${}</p>
        //      </div>
        //    <div class="card-footer bg-dark border-success"><a href="${event.url}" class="btn btn-dark">Buy Tickets</a></div>
        //    </div> */}
