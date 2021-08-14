import React, {useState, useEffect} from 'react'
import './style.css' 
import { useSelector, useDispatch } from "react-redux";
import {followUser,fetchFollowings} from '../../../Redux/Users/action'
const User = ({data, isFollowing}) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);  
    const [isFollowed, setIsFollowed] = useState(false)  
    const onButtonClick = () => {
        dispatch(followUser(data._id))
    } 
    useEffect(() => {
        if(isFollowing){
            setIsFollowed(isFollowing)
        } else{
            if(user?.user?.followings?.indexOf(data._id) == -1) setIsFollowed(false)
            else setIsFollowed(true)
        }
        
    }, [ user,isFollowing]) 
    return(<>
        <div className="user">
            <div className="user-section">
                <img src="https://ik.imagekit.io/hbj42mvqwv/1608022759434_Karan_Singh_avatar_atJQ233GU.png?updatedAt=1608489320984" />
                <p>{data.username}</p>
            </div> 
            {
                data._id === localStorage.getItem('id')
                    ? <>(ME)</>
                    : isFollowed 
                        ? <button className="unfollow-button" onClick={() => onButtonClick()}>UNFOLLOW</button>
                        : <button className="follow-button" onClick={() => onButtonClick()}>FOLLOW</button>
            } 
        </div> 
    </>)
}
export default User