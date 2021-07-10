import { LOCATION } from "./actionTypes";
export const setLocation =({id,fullName,parkCode,stateCode, imageUrl}) =>{
    console.log('actionFired',id,fullName,parkCode,stateCode )
    return{
        type: LOCATION,
        payload:{
            id,
            fullName,
            parkCode, 
            stateCode,
            imageUrl
        }
    }

};
