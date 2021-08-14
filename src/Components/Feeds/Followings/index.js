import React, {useState, useEffect} from 'react'
import './style.css' 
import { useSelector, useDispatch } from "react-redux";
import {fetchFollowings} from '../../../Redux/Users/action'
import User from '../../Common/USER_COMPONENT'
const Followings = () => {
    const [followings, setUsers] = useState([]) 
    const [loading, setloading] = useState(true) 
    const user = useSelector((state) => state.user); 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFollowings())
    }, [])
    useEffect(() => {
        console.log(user)
        setUsers(user.followings) 
        setloading(user.loading)
    }, [user])
    return(<>
        <div div className="Users"> 
            <h2>My Followings ({followings.length})</h2>
            {
                loading
                    ? <img style={{width: '100px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" />
                    :  followings.length > 0
                        ? followings.map((user, i) => {
                            return <User data={user} isFollowing={true} />
                        })
                        : <p style={{marginLeft:'20px'}}>You have no followings! Follow a user from Global Users</p>
            }  
        </div>
    </>)
}
export default Followings