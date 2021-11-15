import { State } from "models/State";
import { SET_LOADING, StateActionTypes } from "store/types/types";


const initialState: State = {
    error: '',
    success: '',
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: StateActionTypes) => {
    switch(action.type){
            case SET_LOADING:
                return {
                    ...state,
                    loading: action.payload
                }
        default:
            return state;
        
    }
 }