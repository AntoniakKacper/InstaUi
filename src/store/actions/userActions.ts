import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {FOLLOW_USER, GET_USER_BY_ID, SET_LOADING, UserActionTypes} from "../types/types";
import axios from "utils/axiosInstance";
import {User} from "../../models/UserModel";

export const getUserById = (id: number): ThunkAction<void, RootState, null, UserActionTypes> => {
    return dispatch => {
        dispatch(setLoadingUser(true));
        try{
            axios.get(`./users/${id}`, {
                headers: {
                    Accept: "application/json",
                },
            }).then((response) => {
                const user = response.data.data;
                dispatch({
                    type: GET_USER_BY_ID,
                    payload: user as User
                })
            }).catch((error) => console.log(error))
        }
        catch (error: any) {
            console.log(error);
        }
    }
}

export const followUser = (user: User): ThunkAction<void, RootState, null, UserActionTypes> => {
    return async dispatch => {
        try {
            await axios.head(`./users/${user.id}/follow`).then(() => {
                user.followers_count += user.isFollowed ? -1 : +1;
                user.isFollowed = !user.isFollowed;
                dispatch({
                    type: FOLLOW_USER,
                    payload: user
                })
            }).catch((error) => console.log(error))
        } catch (error: any) {
            console.log(error);
        }
    }
}

export const setLoadingUser = (loadingValue: boolean): ThunkAction<void, RootState, null, UserActionTypes> => {
    return dispatch => {
        try{
            dispatch({
                type: SET_LOADING,
                payload: loadingValue
            });
        }
        catch (error: any) {
            console.log(error);
        }
    }
}