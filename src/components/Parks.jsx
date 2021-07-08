import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';


const Parks = () => {
    //global state variable 
    const recentSearches = useSelector(state => state.recentSearch);

    console.log(recentSearches);
    
    return <>
        Favorite Parks
    </>
}











export default Parks