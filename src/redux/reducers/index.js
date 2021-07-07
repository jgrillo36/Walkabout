
import { LOCATION } from "../actionTypes";
const intialState = {
    lat: 0,
    lon: 0,
    city: "",
    stat: "",
}

const locationReducer =(state = intialState, action) => {
    switch(action.type){
        case LOCATION:
            return {
                ...state,
                lat: action.payload.lat,
                lon: action.payload.lon,
                city: action.payload.city,
                stat: action.payload.stat,
         }
         default: return state;
    }


}


export default locationReducer