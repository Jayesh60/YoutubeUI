import React from 'react'
import './Sidebarrow.css';


function Sidebarrow({selected, Icon, title}) {
    return (
        <div className = {`sidebarrow ${selected && "selected"}`}>
            <Icon className="sidebarrowicon" />
            <h2 className='sidebarrowtitle'>{title}</h2>
        </div>
    );
}

export default Sidebarrow
