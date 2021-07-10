import React, { useEffect, useState } from "react";
import { ReactReduxContext } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import './../App.css'
import Favorite from "./Favorite";


const Parks = () => {
    //global state variable 
    const recentSearches = useSelector(state => state.recentSearch);

    // console.log(recentSearches);
    
    return( 
    <div>
        
          
     
            {recentSearches.map(park => {
                console.log(park);
               return (<Favorite park={park} />)
            })}
     
        
        
   
    </div>
    
    )
  
}
                










export default Parks