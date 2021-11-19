import {PostActionsTypes, SET_POSTS} from "store/types/types";
import { RootState } from "store";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { PostModel } from "models/PostModel";
import { setLoading } from "./stateActions";



export const setPosts = (): ThunkAction<void, RootState, null, PostActionsTypes> => {
    return async dispatch => {
        try{
            dispatch(setLoading(true));
            axios.get("http://127.0.0.1:8000/api/posts", {
                headers: {
                  Accept: "application/json",
                },
              }).then((res)  => {
                  const response = res.data
                  if(response.data){
                      console.log("Halo")
                      dispatch({
                          type: SET_POSTS,
                          payload: response.data as PostModel[]
                      })
                      dispatch(setLoading(false))
                      
                  }
              })
        }
        catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    }
}