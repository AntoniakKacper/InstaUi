import axios from "axios";
import { signUpData, User } from "models/Authentication";
import { ThunkAction } from "redux-thunk";
import { RootState } from "store";
import { AuthActionsTypes, SET_USER, SIGN_OUT } from "store/types/types";
import setAuthToken from "utils/setAuthToken";


export const setUser = (data: signUpData): ThunkAction<void, RootState, null, AuthActionsTypes> => {
    return async dispatch => {
        setAuthToken(localStorage.token);
        try{
            console.log(data)
           axios.post('http://127.0.0.1:8000/api/register', data
           ).then
           ((response) => {
            const user = response.data.data.user;
            const token = response.data.data.token;
           
            dispatch({
                type: SET_USER,
                payload: {
                    user,
                    token
                }
            })
           }).catch((error) => console.log(error))
        }
        catch (error: any) {
            console.log(error);
        }
    }
}

export const signOut = (userToken: string): ThunkAction<void, RootState, null, AuthActionsTypes> => {
    return async dispatch => {
        try{
            console.log(userToken)
            axios.post('http://127.0.0.1:8000/api/logout',{ headers: {"Authorization" : `Bearer ${userToken}`} }).then((response) => {
console.log(response)
dispatch({
    type: SIGN_OUT
})
            }).catch((error) => {
                console.log(error)
            })
        }
        catch (error: any) {
            console.log(error);
        }
    }
}
