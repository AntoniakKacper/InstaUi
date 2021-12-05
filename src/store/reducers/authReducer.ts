import {AuthState} from "models/Authentication";
import {AuthActionsTypes, SIGN_IN_SOCIAL, SIGN_OUT, SIGN_UP} from "store/types/types";


const initialState: AuthState = {
    user: null,
    authenticated: false,
    token: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: AuthActionsTypes) => {
    switch(action.type){
        case SIGN_UP:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticated: true,
            }
        case SIGN_OUT:
            return {
                ...state,
                token: '',
                authenticated: false,
                user: null
            }
        case SIGN_IN_SOCIAL:
            return {
                ...state
            }
        default:
            return state;
        
    }
 }