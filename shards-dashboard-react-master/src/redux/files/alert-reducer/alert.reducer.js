import {alertActionTypes} from './alert.types.js';

const INITIAL_STATE={

    reviews:[],


}

const ALERT=(currentState = INITIAL_STATE, action)=>{
    
    switch(action.type){

        case "SET_ALERT" :
            console.log("into reducer"+ action.payload)    
            return{...currentState,
                    reviews:action.payload,} 
    
                
                
            default:
            return {currentState};        
    

}


}
export default ALERT;