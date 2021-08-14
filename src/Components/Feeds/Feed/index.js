import React from 'react'
import './style.css'

const Feed = ({data}) => {
    const date = new Date(data.createdOn)
    return(
        <div className="feed-component"> 
            <div className="feed-header">
                <div className="user-section">
                    <img src="https://ik.imagekit.io/hbj42mvqwv/1608022759434_Karan_Singh_avatar_atJQ233GU.png?updatedAt=1608489320984" />
                    <p>{data.creatorName}</p>
                </div>
                <div className="feed-date">
                    {date.toDateString()}
                </div>
            </div>
            <div className="feed-body">
                {data.body}
            </div>
        </div>
    )
}
export default Feed