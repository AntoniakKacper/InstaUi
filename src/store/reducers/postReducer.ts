import {PostState} from "models/PostModel";
import {DELETE_POST, LIKE_POST, PostActionsTypes, SET_POSTS} from "store/types/types";


const initialState: PostState = {
    posts: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: PostActionsTypes) => {
    switch(action.type){
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts!.filter(post => post.id !== action.payload),
            }
        case LIKE_POST:
            return state;
        default:
            return state;

    }
 }

