import { ThunkAction } from "redux-thunk";
import { RootState } from "store";
import { SET_LOADING, StateActionTypes } from "store/types/types";

export const setLoading = (loadingValue: boolean): ThunkAction<void, RootState, null, StateActionTypes> => {
    return async dispatch => {
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