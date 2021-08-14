import React, {useState, useEffect} from 'react'
import './style.css' 
import { useSelector, useDispatch } from "react-redux";
import {fetchFollowers} from '../../../Redux/Users/action'
const Followers = () => {
    const [followers, setFollowers] = useState([]) 
    const [loading, setloading] = useState(true) 
    const user = useSelector((state) => state.user); 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFollowers())
    }, [])
    useEffect(() => {
        console.log(user)
        setFollowers(user.followers) 
        setloading(user.loading)
    }, [user])
    return(<>
        <div div className="Users"> 
            <h2>My Followers ({followers.length})</h2>
                {
                    loading
                        ? <img style={{width: '100px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" />
                        :   followers.length > 0 
                                ? followers.map((user, i) => {
                                    return <div className="user">
                                        <div className="user-section">
                                            <img src="https://ik.imagekit.io/hbj42mvqwv/1608022759434_Karan_Singh_avatar_atJQ233GU.png?updatedAt=1608489320984" />
                                            <p>{user.username}</p>
                                        </div> 
                                        {/* <button className="follow-button">FOLLOW</button> */}
                                    </div>
                                })
                                : <p style={{marginLeft:'20px'}}>You have no followers</p>
            } 
        </div>
    </>)
}
export default Followers