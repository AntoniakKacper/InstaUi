import { PostState } from "models/PostModel";
import { PostActionsTypes, SET_POSTS} from "store/types/types";


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
        default:
            return state;
        
    }
 }

