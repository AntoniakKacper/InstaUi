import { User } from 'models/UserModel';
import { PostModel } from 'models/PostModel';

export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_IN_SOCIAL = "SIGN_IN_SOCIAL";

export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const FOLLOW_USER = "FOLLOW_USER";
export const SET_AVATAR = "SET_AVATAR";
export const SET_NAME = "SET_NAME";

export const SET_POSTS = "SET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

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

// ----USER ACTIONS ----

interface GetUserByIdAction{
    type: typeof GET_USER_BY_ID,
    payload: User
}

interface FollowUserAction {
    type: typeof FOLLOW_USER,
    payload: User
}

interface SetAvatarAction {
    type: typeof SET_AVATAR,
    payload: string;
}

interface SetNameAction {
    type: typeof SET_NAME,
    payload: string;
}



// ----POST----

interface SetPostsAction {
    type: typeof SET_POSTS,
    payload: PostModel[]
}

interface DeletePostAction {
    type: typeof DELETE_POST,
    payload: number
}

interface LikePostAction{
    type: typeof LIKE_POST,
    payload: PostModel
}

interface AddCommentAction{
    type: typeof ADD_COMMENT,
    payload: PostModel
}

interface DeleteCommentAction{
    type: typeof DELETE_COMMENT,
    payload: PostModel
}


// ----STATE----

interface SetLoadingAction {
    type: typeof SET_LOADING,
    payload: boolean
}


export type AuthActionsTypes = SetUserAction | SignOutAction | SignInSocialAction | SetLoadingAction | SetAvatarAction | SetNameAction;

export type  UserActionTypes = GetUserByIdAction | FollowUserAction | SetLoadingAction | SetAvatarAction | SetNameAction;

export type PostActionsTypes = SetPostsAction | DeletePostAction | LikePostAction | SetLoadingAction | AddCommentAction | DeleteCommentAction;