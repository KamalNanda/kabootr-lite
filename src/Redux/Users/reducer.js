import {
    FETCH_USERS, 
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,  
    FETCH_FOLLOWERS, 
    FETCH_FOLLOWERS_SUCCESS,
    FETCH_FOLLOWERS_FAILED,  
    FETCH_FOLLOWINGS, 
    FETCH_FOLLOWINGS_SUCCESS,
    FETCH_FOLLOWINGS_FAILED,  
    FETCH_USER, 
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,  
    FOLLOW_USER, 
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILED,  
} from "./constant.js";
import { toast } from "react-toastify";

const initialState = {
    loading: false,
    user: {},
    users : [],
    followers: [],
    followings: []
}
  
export const userReducer = (state = initialState, action) => { 
    switch (action.type) {
        case FETCH_USERS: 
            return { ...state, loading: true };
        case FETCH_USERS_SUCCESS: 
            return { ...state, loading: false , users : action.payload.users};  
        case FETCH_USERS_FAILED: 
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
        case FETCH_FOLLOWINGS: 
            return { ...state, loading: true };
        case FETCH_FOLLOWINGS_SUCCESS: 
            return { ...state, loading: false , followings : action.payload.followings};  
        case FETCH_FOLLOWINGS_FAILED:
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
        case FETCH_FOLLOWERS: 
            return { ...state, loading: true };
        case FETCH_FOLLOWERS_SUCCESS: 
            return { ...state, loading: false , followers : action.payload.followers};  
        case FETCH_FOLLOWERS_FAILED:
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
        
        case FETCH_USER: 
            return { ...state, loading: true };
        case FETCH_USER_SUCCESS: 
            return { ...state, loading: false , user : action.payload.user};  
        case FETCH_USER_FAILED: 
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
        case FOLLOW_USER: 
            return { ...state, loading: true };
        case FOLLOW_USER_SUCCESS: 
            toast.success(`Success - ${action.payload.message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return { ...state, loading: false , user : action.payload.user, followings : action.payload.followings};  
        case FOLLOW_USER_FAILED: 
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