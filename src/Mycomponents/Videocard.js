import React from 'react';
import './Videocard.css';
import Avatar from '@material-ui/core/Avatar';


function Videocard({image, title, channel, views, timestamp, avatar}) {
    return (
        <div className='Videocard'>
            
            <img className ="video_thumbnail" src={image} alt=""/>
             <div className="channelInfo">
                <Avatar className="avatar" src ={avatar}/>
                <div className='video_text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
            
                    <p>{views} &#8226; {timestamp}</p>
                    </div>
            </div>   
      </div>
    );
}

export default Videocard
