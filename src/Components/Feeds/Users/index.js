import React, {useState, useEffect} from 'react'
import './style.css' 
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers} from '../../../Redux/Users/action'
import UserComponent from '../../Common/USER_COMPONENT'
const Users = () => {
    const [users, setUsers] = useState([]) 
    const [loading, setloading] = useState(true) 
    const user = useSelector((state) => state.user); 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    useEffect(() => {
        console.log(user)
        setUsers(user.users) 
        setloading(user.loading)
    }, [user])
    return(<>
        <div div className="Users"> 
            <h2>Global Users ({users.length})</h2>
            {
                loading
                    ? <img style={{width: '100px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" />
                    :  users.map((u, i) => {
                        return <UserComponent data={u} isFollowing={false} />
                    })
            }   
        </div>
    </>)
}
export default Users