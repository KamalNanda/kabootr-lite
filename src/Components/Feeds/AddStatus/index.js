import React, {useState} from 'react'
import './style.css'
import { useSelector, useDispatch } from "react-redux";
import {addStatus} from '../../../Redux/Feeds/action'

const AddStatus = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addStatus(status))
        setStatus('')
    }
    return(
        <form className="add-status" onSubmit={(e) =>  handleSubmit(e)}>
            <span>Add new status</span>
            <textarea  
                disabled={status.length === 125 ? true : false} 
                onChange={(e) => setStatus(e.target.value)} 
                placeholder="Add your status within 125 words"
                value={status}
            >
            </textarea>
            {error && <p className="error">{error}</p> }
            <button>ADD</button>
        </form>
    )
}
export default AddStatus