import {UserState} from "models/UserModel";
import {DELETE_USER_COMMENT, FOLLOW_USER, GET_USER_BY_ID, SET_AVATAR, SET_LOADING, UserActionTypes} from "../types/types";

const initialState: UserState = {
    user: null,
    posts: null,
    userLoading: false,
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
                posts: action.payload.posts,
                userLoading: false,
            }
        case FOLLOW_USER:
            return {
                ...state,
                user: action.payload,
                userLoading: false,
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
        case DELETE_USER_COMMENT:
            return {
                ...state,
                posts: state.posts!.map(post => post.id === action.payload.id ? action.payload : post),
            }

        default:
            return state;
    }
}
