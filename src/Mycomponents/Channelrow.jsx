import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Channelrow.css";
import  VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function Channelrow({image,
    Channel,
    subs,
    noOfVideos,
    description,
    verified}) {
    return (
        <div className='channelrow'>
            <Avatar className='channelrow_avatar'src={image} alt={Channel} />
            <div className="text">
                <h4>
                    {Channel} {verified && <VerifiedIcon/> } 
                </h4>
            
            <p>
                {subs} subscribers &#8226; {noOfVideos} videos
            </p>
            <p>
                {description}
            </p>
            </div>
        </div>
    );
}

export default Channelrow
