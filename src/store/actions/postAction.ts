import {DELETE_POST, LIKE_POST, PostActionsTypes, SET_LOADING, SET_POSTS} from "store/types/types";
import {RootState} from "store";
import {ThunkAction} from "redux-thunk";
import axios from "utils/axiosInstance";
import {PostModel} from "models/PostModel";



export const setPosts = (): ThunkAction<void, RootState, null, PostActionsTypes> => {
    return async dispatch => {
        try{
            dispatch(setLoading(true));
            await axios.get("./posts", {
                headers: {
                  Accept: "application/json",
                },
              }).then((res)  => {
                  const response = res.data
                  console.log(response);
                  dispatch({
                      type: SET_POSTS,
                      payload: response.data as PostModel[]
                  })
              }).catch((error) => console.log(error));
            dispatch(setLoading(false))
        }
        catch (error: any) {
            console.log(error);
            setLoading(false);
        }
        finally {
            setLoadingPost(false);
        }
    }
}

export const setUserPosts = (id: number): ThunkAction<void, RootState, null, PostActionsTypes> => {
    return dispatch => {
        dispatch(setLoadingPost(true));
        try{
            axios.get(`./users/${id}/posts`, {
                headers: {
                    Accept: "application/json",
                },
            }).then((res)  => {
                const response = res.data
                dispatch({
                    type: SET_POSTS,
                    payload: response.data as PostModel[]
                })
            }).catch(error => console.log(error))
        }
        catch (error: any) {
            console.log(error);
        }
    }
}

export const deletePost = (id: number): ThunkAction<void, RootState, null, PostActionsTypes> => {
    return dispatch => {
        dispatch(setLoadingPost(true));
        try{
            axios.delete(`/posts/${id}`, {
                headers: {
                    Accept: "application/json",
                },
            }).then(()  => {
                dispatch({
                    type: DELETE_POST,
                    payload: id
                })
            }).catch(error => console.log(error))
        }
        catch (error: any) {
            console.log(error);
        }
        finally {
            setLoadingPost(false);
        }
    }
}

export const likePost = (post: PostModel): ThunkAction<void, RootState, null, PostActionsTypes> => {
    return dispatch => {
        try{
            axios.head(`/posts/${post.id}/like`, {
                headers: {
                    Accept: "application/json",
                },
            }).then(()  => {
                post.likes_count += post.isLiked ? -1 : 1;
                post.isLiked = !post.isLiked;
                dispatch({
                    type: LIKE_POST,
                    payload: post
                })
            }).catch((error) => console.log(error))
        }
        catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    }
}

export const setLoadingPost = (loadingValue: boolean): ThunkAction<void, RootState, null, PostActionsTypes> => {
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