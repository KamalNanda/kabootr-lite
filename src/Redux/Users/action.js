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
import axios from 'axios'
import {API_ROOT} from '../../config.json'  
   

export const fetchUsers = () => async (dispatch) => {
    dispatch({type: FETCH_USERS})  
    try{
        await axios
            .get(`${API_ROOT}/user/getallusers`)
            .then(res =>{
                console.log(res)  
                dispatch({type : FETCH_USERS_SUCCESS, payload : res.data })
            })
            .catch(err => {  
                dispatch({type : FETCH_USERS_FAILED, payload : err.response.data })
            })
    }
    catch (error){
        console.log(error)
        dispatch({type : FETCH_USERS_FAILED, error})
    }
}
   
export const fetchFollowers = () => async (dispatch) => {
    dispatch({type: FETCH_FOLLOWERS})  
    try{
        await axios
            .get(`${API_ROOT}/user/fetchFollowers/${localStorage.getItem('id')}`)
            .then(res =>{
                console.log(res)  
                dispatch({type : FETCH_FOLLOWERS_SUCCESS, payload : res.data })
            })
            .catch(err => {  
                dispatch({type : FETCH_FOLLOWERS_FAILED, payload : err.response.data })
            })
    }
    catch (error){
        console.log(error)
        dispatch({type : FETCH_FOLLOWERS_FAILED, error})
    }
}

export const fetchFollowings = () => async (dispatch) => {
    dispatch({type: FETCH_FOLLOWINGS})  
    try{
        await axios
            .get(`${API_ROOT}/user/fetchFollowings/${localStorage.getItem('id')}`)
            .then(res =>{
                console.log(res)  
                dispatch({type : FETCH_FOLLOWINGS_SUCCESS, payload : res.data })
            })
            .catch(err => {  
                dispatch({type : FETCH_FOLLOWINGS_FAILED, payload : err.response.data })
            })
    }
    catch (error){
        console.log(error)
        dispatch({type : FETCH_FOLLOWINGS_FAILED, error})
    }
}
export const fetchUser = () => async (dispatch) => {
    dispatch({type: FETCH_USER})  
    try{
        await axios
            .get(`${API_ROOT}/user/${localStorage.getItem('id')}`)
            .then(res =>{
                console.log(res)  
                dispatch({type : FETCH_USER_SUCCESS, payload : res.data })
            })
            .catch(err => {  
                dispatch({type : FETCH_USER_FAILED, payload : err.response.data })
            })
    }
    catch (error){
        console.log(error)
        dispatch({type : FETCH_USER_FAILED, error})
    }
}
export const followUser = (followerId) => async (dispatch) => {
    dispatch({type: FOLLOW_USER})  
    try{
        await axios
            .put(`${API_ROOT}/user/follow`, {followerId, userId: localStorage.getItem('id')})
            .then(async res =>{
                console.log(res)    
                let followings
                await axios
                    .get(`${API_ROOT}/user/fetchFollowings/${localStorage.getItem('id')}`)
                    .then(res =>{
                        console.log(res)  
                        followings = res.data.followings
                    })
                dispatch({type : FOLLOW_USER_SUCCESS, payload : {...res.data, followings} })
            })
            .catch(err => {  
                dispatch({type : FOLLOW_USER_FAILED, payload : err.response.data })
            })
    }
    catch (error){
        console.log(error)
        dispatch({type : FETCH_USER_FAILED, error})
    }
}