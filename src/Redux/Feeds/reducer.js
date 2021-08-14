import {
    ADDING_STATUS, 
    ADDING_STATUS_SUCCESS,
    ADDING_STATUS_FAILED,  
    FETCHING_STATUS, 
    FETCHING_STATUS_SUCCESS,
    FETCHING_STATUS_FAILED,  
} from "./constant.js";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    statuses : []
}
  
export const statusReducer = (state = initialState, action) => { 
    switch (action.type) {
        case ADDING_STATUS: 
            return { ...state, loading: true };
        case ADDING_STATUS_SUCCESS:
            toast.success(`Success - ${action.payload.message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            let newStatusList = [action.payload.status, ...state.statuses ]
            return { ...state, loading: false , statuses : newStatusList};  
        case ADDING_STATUS_FAILED:
            toast.error(`Error - ${action.payload.error}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return { ...state, loading: false }; 
        case FETCHING_STATUS: 
            return { ...state, loading: true };
        case FETCHING_STATUS_SUCCESS: 
            return { ...state, loading: false , statuses : action.payload.statuses.reverse()};  
        case FETCHING_STATUS_FAILED:
            toast.error(`Error - ${action.payload.error}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return { ...state, loading: false }; 
        default:
        return state;
    }
};