import React, {useState, useEffect} from 'react'
// import './style.css'
import Feed from '../Feed'
import { useSelector, useDispatch } from "react-redux";
import {fetchStatus} from '../../../Redux/Feeds/action'
const Feeds = () => {
    const [statuses, setStatuses] = useState([])
    const [loading, setLoading] = useState(true)
    const status = useSelector((state) => state.status); 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStatus())
    }, [])
    useEffect(() => {
        console.log(status)
        setStatuses(status.statuses)
        setLoading(status.loading)
    }, [status])
    return(<>
    {
        loading
            ? <img style={{width: '100px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" />
            :  <div className="feeds"> 
                    {
                        statuses.map((status, i) => {
                            return <Feed data = {status} />
                        })
                    } 
                </div>
    }
       
    </>)
}
export default Feeds