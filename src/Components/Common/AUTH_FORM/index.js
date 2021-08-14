import React, { useState } from 'react';
import { useHistory } from 'react-router'; 
import './style.css' 
const Form = ({type, inputs, submitHandler}) => {
    const history = useHistory()
    const [formData, setFormData] = useState({})
    const [error, setError] = useState('')
    const handleInput = (e) => { 
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()  
        submitHandler(formData)
    }
    return (
        <div className="form-component">
            <h2>{type}</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
                {
                    inputs.map((input,i) => {
                        return <div className="input-group" key={i} >
                            <label>{input.label}</label>
                            <input 
                                type={input.type}
                                placeholder={input.placeholder}
                                name={input.name}
                                onChange={(e) => handleInput(e)}
                                autoComplete="off" 
                                required={true}
                                disabled = {input.isDisabled} 
                            />
                        </div>
                    })
                }
                <span style={{fontSize:'1rem', display:'block',color:'red', textAlign:'center'}}>{error}</span>
                <span>{
                    type === 'LOGIN'
                        ? <h5>Not a user? <a href="/register">Register NOW</a></h5>
                        : <h5>Already a user? <a href="/">Login NOW</a></h5>
                }</span>
                
                <button>{type}</button>
            </form>
        </div>
    )
}
export default Form