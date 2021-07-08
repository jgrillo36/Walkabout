import { LOCATION } from "./actionTypes";
export const setLocation =({id,fullName,parkCode,stateCode}) =>{
    console.log('actionFired',id,fullName,parkCode,stateCode )
    return{
        type: LOCATION,
        payload:{
            id,
            fullName,
            parkCode, 
            stateCode,
            
        }
    }

};
