import axios from "utils/axiosInstance";
import { signInData, signUpData } from "models/Authentication";
import { ThunkAction } from "redux-thunk";
import { RootState } from "store";
import {AuthActionsTypes, SET_LOADING, SIGN_OUT, SIGN_UP } from "store/types/types";
import { setLoading } from "./stateActions";


export const signUp = (data: signUpData): ThunkAction<void, RootState, null, AuthActionsTypes> => {
    return async dispatch => {
        try{
           axios.post('./register', data
           ).then
           ((response: any) => {
            const user = response.data.data.user;
            const token = response.data.data.token;
           
            dispatch({
                type: SIGN_UP,
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

export const signIn = (data: signInData): ThunkAction<void, RootState, null, AuthActionsTypes> => {
    return async dispatch => {
        try{
            //setLoading(true);
           axios.post('/login', data
           ).then
           ((response) => {
               console.log(response)

                const user = response.data.data.user;
                const token = response.data.data.token;

                dispatch({
                    type: SIGN_UP,
                    payload: {
                        user,
                        token
                    }
                })
            //setLoading(false);
           }).catch((error) => console.log(error))
        }
        catch (error: any) {
            console.log(error);
        }
    }
}

export const signOut = (): ThunkAction<void, RootState, null, AuthActionsTypes> => {
    return async dispatch => {
        try{
            setLoading(true);
            axios.post('./logout').then(() => {
dispatch({
    type: SIGN_OUT
})
setLoading(false);
            }).catch((error) => {
                console.log(error)
            })
        }
        catch (error: any) {
            console.log(error);
        }
    }
}

export const signInSocial = (passedToken: string, social: "google" | "github"): ThunkAction<void, RootState, null, AuthActionsTypes> => {
    return async dispatch => {
        try{
            axios.get(`./login/${social}/callback`,
                {
                    params: {
                        token: passedToken
                    }
                }).then((response) => {
                    console.log(response)
                    const user = response.data.data.user;
                    const token = response.data.data.token;
                    console.log(token);
                    dispatch({
                        type: SIGN_UP,
                        payload: {
                            user,
                            token
                        }
                    })
                console.log(response.data.data);
            })
            
        }
        catch (error: any) {
            console.log(error);
        }
    }
}


