import {alertActionTypes} from './alert.types';

const setAlert= (reviews)=>async(dispatch)=> {
    dispatch({
        type:"SET_ALERT",
        payload: reviews,
    })

}

export default setAlert;