import { LOCATION } from "./actionTypes";
export const setLocation =({lat,lon,city,stat}) =>{
    return{
        type: LOCATION,
        payload:{
            lat, 
            lon,
            city,
            stat,
        }
    }

};
