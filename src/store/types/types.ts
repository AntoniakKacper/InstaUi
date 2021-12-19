import { User } from 'models/UserModel';
import { PostModel } from 'models/PostModel';

export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_IN_SOCIAL = "SIGN_IN_SOCIAL";

export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const GET_USER_POSTS = "GET_USER_POSTS";
export const LIKE_USER_POST = "LIKE_USER_POST";
export const ADD_USER_COMMENT = "ADD_USER_POST";
export const FOLLOW_USER = "FOLLOW_USER";
export const SET_AVATAR = "SET_AVATAR";
export const SET_NAME = "SET_NAME";

export const SET_POSTS = "SET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_POST_COMMENT = "DELETE_POST_COMMENT";
export const DELETE_USER_COMMENT = "DELETE_USER_COMMENT";

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

interface GetUserPosts{
    type: typeof GET_USER_POSTS,
    payload: {
        posts: PostModel[],
        currentPage: number,
        hasNextPage: boolean,
    }
}

interface FollowUserAction{
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

interface LikeUserPostAction{
    type: typeof  LIKE_USER_POST,
    payload: PostModel
}

interface AddUserComment{
    type: typeof ADD_USER_COMMENT,
    payload: PostModel
}



// ----POST----

interface SetPostsAction {
    type: typeof SET_POSTS,
    payload: {
        posts: PostModel[],
        currentPage: number,
        hasNextPage: boolean,
    }
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

interface DeletePostCommentAction{
    type: typeof DELETE_POST_COMMENT,
    payload: PostModel
}

interface DeleteUserCommentAction{
    type: typeof DELETE_USER_COMMENT,
    payload: PostModel
}


// ----STATE----

interface SetLoadingAction {
    type: typeof SET_LOADING,
    payload: boolean
}


export type AuthActionsTypes = SetUserAction | SignOutAction | SignInSocialAction | SetLoadingAction | SetAvatarAction
    | SetNameAction;

export type  UserActionTypes = GetUserByIdAction | FollowUserAction | SetLoadingAction | SetAvatarAction
    | SetNameAction | DeleteUserCommentAction | GetUserPosts | LikeUserPostAction | AddUserComment;

export type PostActionsTypes = SetPostsAction | DeletePostAction | LikePostAction | SetLoadingAction | AddCommentAction
    | DeletePostCommentAction;