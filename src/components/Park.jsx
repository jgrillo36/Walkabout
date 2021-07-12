import {React, useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'



export default function Park() {
    const {parkcode} = useParams()
   const[park,setPark] = useState([]);
   
    console.log(parkcode)
    useEffect(() =>{
        (async function () {
           await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkcode}&api_key=9LM6ZhHeG6sKKnKjV5pzSRPS8b0DGfghndyl6m9a`)
        .then(response => response.json())
        .then(natParkData => {console.log(natParkData)
        setPark(
             natParkData.data
        )})

        })();

        
           
    
           
       
    


    },[setPark])
    console.log(park[0])


    return (
        <div>
            
        
            <h1>Park name</h1>
            <h2>Park Location</h2>
            <h2>Park decscription</h2>
            <h2>Webcam</h2>
          

          
              
            
        </div>
    )
}
