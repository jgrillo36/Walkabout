
import { LOCATION } from "../actionTypes";
const intialState =
 
    { 
        recentSearch: {
            1001: {
                parkCode: '',
                fullName: '',
                stateCode: '',

            },
                        
        },
    }


const locationReducer =(state = intialState, action) => { console.log(action)
    switch(action.type){
        case LOCATION:{
            const {parkCode,fullName,stateCode,id} = action.payload
            
            return {

                ...state.recentSearch,
                    [id]:{
                    parkCode,
                    fullName,
                    stateCode,
                },

            }

        }
            
         default: return state;
    }


}


export default locationReducer