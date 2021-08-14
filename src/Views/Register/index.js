import React, { useEffect } from 'react'
import inputs from './inputs'   
import FormPage from '../../Components/Common/AUTH_FORM_PAGE'
import {API_ROOT} from '../../config.json' 
import { useHistory } from 'react-router'; 
import axios from 'axios';
import { toast } from "react-toastify";
import { useSelector } from "react-redux"; 
const REGISTER = () => { 
    const history = useHistory()
    const register = useSelector((state) => state.register);  
    const submitHandler = async (obj) => {
        console.log(obj) 
        await axios
            .post(`${API_ROOT}/user/register`, obj)
            .then(res =>{
                console.log(res)  
                localStorage.setItem('id', res.data.user._id)
                history.push('/feeds')
            }).catch(err => {
                toast.error(`Error - ${err.response.data.error}`, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
    }
    useEffect(() =>{
        console.log(register)
    }, [register])
    return (
        <FormPage 
            inputs={inputs} 
            type={"REGISTER"}
            submitHandler={(obj) => submitHandler(obj)}
        />
    )
}
export default REGISTER