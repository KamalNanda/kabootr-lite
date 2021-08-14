import React from 'react'
import Form from '../AUTH_FORM'   
import './style.css'
const FormContainer = ({type, inputs, submitHandler}) => {
    return <div className="form-page" style={{background:'white'}}> 
        <div className="logo-container">
            {/* <img src={Logo} alt="logo" className="logo" /> */}
            <p>KABOOTR</p>
        </div> 
        <div className="form-container">
            <Form type={type} inputs={inputs} submitHandler={submitHandler} />
        </div>
        <p style={{textAlign:'right', marginRight:'20px'}}>Version 1.0</p>
    </div>
}
export default FormContainer