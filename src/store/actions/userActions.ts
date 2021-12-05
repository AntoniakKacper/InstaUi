import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {FOLLOW_USER, GET_USER_BY_ID, UserActionTypes} from "../types/types";
import axios from "utils/axiosInstance";
import {User} from "../../models/UserModel";
import {setLoading} from "./stateActions";

export const getUserById = (id: number): ThunkAction<void, RootState, null, UserActionTypes> => {
    return async dispatch => {
        try{
            dispatch(setLoading(true));
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
            axios.head(`./users/${user.id}/follow`).then(() => {
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