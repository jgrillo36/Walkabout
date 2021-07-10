import React, {useState} from 'react';
 
import Result from './Result';

const Results = (props) => {
  
    const{parks}= props
    // const [parkId,setparkId] = useState('')
    // const [fullName,setfullName] = useState('')
    // const [stateCode,setstateCode] = useState('')
    // const[parkCode,setparkcode]  = useState ('')
    
  
    
    return (
        <div>
        
          
                 {parks.map(park =>
                 <Result park={park}>

                 </Result>
                 
             )}


              
          
            
        </div>
    )
}

export default Results;

