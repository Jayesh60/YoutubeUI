import React from 'react'
import './Sidebar.css';
import Sidebarrow from './Sidebarrow';
import HomeIcon from '@material-ui/icons/Home';
import TrendingIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchlaterIcon from '@material-ui/icons/WatchLater';
import Likedvideo from '@material-ui/icons/ThumbUpSharp';
import Showmore from '@material-ui/icons/ExpandMore';
import VideoIcon from '@material-ui/icons/OndemandVideo';


function Sidebar() {
    return (
        <div className='sidebar'>
            
            <Sidebarrow selected Icon = {HomeIcon} title = "Home"/>
            <Sidebarrow Icon = {TrendingIcon} title = "Trending"/>
            <Sidebarrow Icon = {SubscriptionIcon} title = "Subscription"/>
            <hr/>
            <Sidebarrow Icon= {VideoLibraryIcon} title ="Library"/>
            <Sidebarrow Icon= {HistoryIcon} title ="History"/>
            <Sidebarrow Icon= {VideoIcon} title ="Your Videos"/>
            <Sidebarrow Icon= {WatchlaterIcon} title ="Watch Later"/>
            <Sidebarrow Icon= {Likedvideo} title ="Liked Video"/>
            <Sidebarrow Icon= {Showmore} title ="Show More"/>
            <hr/>
        </div>
    );
}

export default Sidebar
