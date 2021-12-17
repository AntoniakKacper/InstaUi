import {UserState} from "models/UserModel";
import {FOLLOW_USER, GET_USER_BY_ID, SET_AVATAR, SET_LOADING, SET_NAME, UserActionTypes} from "../types/types";

const initialState: UserState = {
    user: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UserActionTypes) => {
    switch (action.type) {
        case SET_LOADING:
            return{
                ...state,
                userLoading: true
            }
        case GET_USER_BY_ID:
            return {
                ...state,
                user: action.payload,
            }
        case FOLLOW_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_AVATAR:
            return {
                ...state,
                user: state.user && {
                    ...state.user,
                    avatar_url: action.payload,
                },
                userLoading: false,
            }
        case SET_NAME:
            return {
                ...state,
                user: state.user && {
                    ...state.user,
                    name: action.payload,
                },
                userLoading: false,
            }

        default:
            return state;
    }
}
