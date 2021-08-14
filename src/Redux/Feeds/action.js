import {
    ADDING_STATUS,
    ADDING_STATUS_SUCCESS,
    ADDING_STATUS_FAILED, 
    FETCHING_STATUS, 
    FETCHING_STATUS_SUCCESS,
    FETCHING_STATUS_FAILED,  
} from "./constant.js";
import axios from 'axios'
import {API_ROOT} from '../../config.json'  
  
export const addStatus = (obj) => async (dispatch) => {
    dispatch({type: ADDING_STATUS})  
    try{
        await axios
            .post(`${API_ROOT}/status/create`, {body: obj, createdBy : localStorage.getItem('id')})
            .then(res =>{
                console.log(res)  
                dispatch({type : ADDING_STATUS_SUCCESS, payload : res.data })
            })
            .catch(err => {  
                dispatch({type : ADDING_STATUS_FAILED, payload : err.response.data })
            })
    }
    catch (error){
        console.log(error)
        dispatch({type : ADDING_STATUS_FAILED, error})
    }
}

export const fetchStatus = () => async (dispatch) => {
    dispatch({type: FETCHING_STATUS})  
    try{
        await axios
            .get(`${API_ROOT}/status/fetchStatus/${localStorage.getItem('id')}`)
            .then(res =>{
                console.log(res)  
                dispatch({type : FETCHING_STATUS_SUCCESS, payload : res.data })
            })
            .catch(err => {  
                dispatch({type : FETCHING_STATUS_FAILED, payload : err.response.data })
            })
    }
    catch (error){
        console.log(error)
        dispatch({type : FETCHING_STATUS_FAILED, error})
    }
}
   