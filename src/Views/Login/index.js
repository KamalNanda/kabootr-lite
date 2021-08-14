import React, { useEffect } from 'react'
import inputs from './inputs'   
import FormPage from '../../Components/Common/AUTH_FORM_PAGE'
import { useSelector } from "react-redux"; 
import {API_ROOT} from '../../config.json' 
import { useHistory } from 'react-router'; 
import { toast } from "react-toastify";
import axios from 'axios';
const LOGIN = () => {  
    const history = useHistory()
    const login = useSelector((state) => state.login);  
    const submitHandler = async (obj) => {
        console.log(obj)
        await axios
            .post(`${API_ROOT}/user/login`, obj)
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
        console.log(login)
    }, [login])
    return (
        <FormPage 
            inputs={inputs} 
            type={"LOGIN"}
            submitHandler={(obj) => submitHandler(obj)}
        />
    )
}
export default LOGIN