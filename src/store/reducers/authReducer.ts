import { AuthState } from "models/Authentication";
import { AuthActionsTypes, SET_USER, SIGN_OUT } from "store/types/types";


const initialState: AuthState = {
    user: null,
    authenticated: false,
    token: localStorage.getItem("token")
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: AuthActionsTypes) => {
    switch(action.type){
        case SET_USER:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticated: true
            }
            case SIGN_OUT:
                localStorage.removeItem("token");
                return {
                    ...state,
                    token: '',
                    authenticated: false
                }
        default:
            return state;
        
    }
 }