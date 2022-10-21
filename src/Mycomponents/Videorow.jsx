import React from 'react'
import './Videorow.css';


function Videorow(
   { views,
    subs,
    description,
    channel,
    title,
    image}
) {
    return (
        <div className='videorow'>
            <img src={image} alt=''/>
            <div className="videorowtext">
                <h3>
                    {title}
                </h3>
                <p>
                    {channel} &#8226; {subs} Subscribers &#8226; {views} views
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Videorow
