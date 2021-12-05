import {UserState} from "models/UserModel";
import {FOLLOW_USER, GET_USER_BY_ID, UserActionTypes} from "../types/types";

const initialState: UserState = {
    user: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UserActionTypes) => {
    switch (action.type) {
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
        default:
            return state;
    }
}
