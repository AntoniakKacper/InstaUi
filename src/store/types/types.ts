import { User } from 'models/Authentication';
import { PostModel } from 'models/PostModel';

export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_IN_SOCIAL = "SIGN_IN_SOCIAL";

export const SET_POSTS = "SET_POSTS";
export const DELETE_POST = "DELETE_POST";

export const SET_LOADING = "SET_LOADING";

// ----AUTHENTICATION----

interface SetUserAction {
    type: typeof SIGN_UP,
    payload: {
        user: User,
        token: string
    }
}

interface SignOutAction {
    type: typeof SIGN_OUT,
}

interface SignInSocialAction {
    type: typeof SIGN_IN_SOCIAL,
    //payload: string;
}



// ----POST----

interface SetPostsAction {
    type: typeof SET_POSTS,
    payload: PostModel[]
}

interface DeletePostAction {
    type: typeof DELETE_POST,
    //payload: PostModel
    payload: number
}


// ----STATE----

interface SetLoadingAction {
    type: typeof SET_LOADING,
    payload: boolean
}


export type AuthActionsTypes = SetUserAction | SignOutAction | SignInSocialAction;

export type PostActionsTypes = SetPostsAction | DeletePostAction;

export type StateActionTypes = SetLoadingAction;
