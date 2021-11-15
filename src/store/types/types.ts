//import { PostModel } from '../../models/PostModel';
import { User } from 'models/Authentication';
import { PostModel } from 'models/PostModel';

export const SET_USER = "SET_USER";
export const SIGN_OUT = "SIGN_OUT";

export const SET_POSTS = "SET_POSTS";

export const SET_LOADING = "SET_LOADING";

// ----AUTHENTICATION----

interface SetUserAction {
    type: typeof SET_USER,
    payload: {
        user: User,
        token: string
    }
}

interface SignOutAction {
    type: typeof SIGN_OUT,
}

// ----POST----

interface SetPostsAction {
    type: typeof SET_POSTS,
    payload: PostModel[];
}

// ----STATE----

interface SetLoadingAction {
    type: typeof SET_LOADING,
    payload: boolean
}


export type AuthActionsTypes = SetUserAction | SignOutAction;

export type PostActionsTypes = SetPostsAction ;

export type StateActionTypes = SetLoadingAction;
