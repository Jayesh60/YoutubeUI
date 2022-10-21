import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon  from '@material-ui/icons/Notifications';
import  VideoCall  from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps'
import  Avatar  from '@material-ui/core/Avatar';
import {Link} from  'react-router-dom';

function Header() {
        const [inputSearch, setInputSearch]=useState("");
    return (
        <div className = "Header"> 
                <div className ="Header_right"> 
                        {/* <Link className='Menuicon'> */}
                        <MenuIcon/>
                        {/* </Link> */}
                        
                        <Link to={"/"}>
                        <img className = "logo" src ="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="logo here"/>
                        </Link>
                </div>
                <div className="Header_input">
                        <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} 
                        Placeholder="Search" 
                        className="inputbar" 
                        type="text"/>
                      <Link to={`./search/${inputSearch}`}> 
                      <SearchIcon  className="searchButton"/>
                      </Link>
                       
                </div>
                <div className = "Header_left">
                        {/* <Link> */}
                        <VideoCall className='Icon'/>
                        {/* </Link> */}
                        {/* <Link> */}
                        <AppsIcon className='Icon'/>
                        {/* </Link>
                        <Link> */}
                        <NotificationIcon className='Icon'/>
                        {/* </Link> */}
                        {/* <Link> */}
                        <Avatar className="Avatar" src="https://upload.wikimedia.org/wikipedia/commons/7/70/Mahendra_Singh_Dhoni_January_2016_%28cropped%29.jpg"/>
                        {/* </Link> */}
                </div>
        </div> 
    );
} 

export default Header