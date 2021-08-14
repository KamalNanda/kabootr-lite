import React, { useEffect } from 'react'   
import './style.css'
import AddStatus from '../../Components/Feeds/AddStatus'
import Feeds from '../../Components/Feeds/Feeds'
import Users from '../../Components/Feeds/Users'
import Followers from '../../Components/Feeds/Followers'
import Followings from '../../Components/Feeds/Followings'
import { useSelector, useDispatch } from "react-redux"; 
import {fetchUser} from '../../Redux/Users/action'  
import { useHistory } from 'react-router'
const FeedsPage = () => {  
    const dispatch = useDispatch() 
    const history = useHistory()
    const user = useSelector((state) => state.user); 
    useEffect(() => {
        if(!localStorage.getItem('id')){
            history.push('/')
        }
        else{
            dispatch(fetchUser())        
        }
    }, [])
    useEffect(() => {
        console.log(user)
    }, [user])
    const onLogoutClick = () => {
        localStorage.clear()
        history.push('/')
    }
    return (
        <>
        <p className="heading">KABOOTR</p>
        <p className="logout" onClick={() => onLogoutClick()}>LOGOUT</p>
        <div className="feed-page">
            <div className="users-section">
                <Users />
            </div>
            <div className="feeds-section">
                <AddStatus />
                <Feeds />
            </div>
            <div className="profile-section"> 
                <Followers />
                <Followings />
            </div> 
        </div>
    </>)
}
export default FeedsPage