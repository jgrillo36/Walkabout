
import { LOCATION } from "../actionTypes";
const intialState =
 
    { 
        recentSearch: [],
    }


const locationReducer = (state = intialState, action) => { 

    console.log('ACTION FIRING: ', action);
    
    switch(action.type){
        case LOCATION: {
            const {id} = action.payload;
            const newRecentSearch = state.recentSearch.slice();
            const alreadyExists = newRecentSearch.find(park => {
                return park.id === id;
            });

            if(alreadyExists){
                // pass
            } else {
                newRecentSearch.push(action.payload);
            }
            
            return {
                ...state,
                recentSearch: newRecentSearch
            }
        }
        
        default: return state;
    }
            
}

export default locationReducer;