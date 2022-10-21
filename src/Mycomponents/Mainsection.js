import React from 'react'
import './Mainsection.css';
import Videocard from './Videocard';


function Mainsection() {
    return (
        <div className='mainsection'>
               <h2>Recommended Videos</h2>
            <div className ="videos">
                <Videocard
                    title ="Become webdev. in 30 min"
                    views="2.4M views"
                    timestamp="1 weeks ago"
                    channel="Clever Programmer"
                    image="https://i.ytimg.com/vi/hhZtiytNaBQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBcrc8HMnMEtITpwA6BaYvoteOkJw"
                    avatar="https://upload.wikimedia.org/wikipedia/commons/7/7f/Gaurav_Chaudhary.jpg"
                />          
                <Videocard 
                 title ="Pubg gameplay stream"
                 views="2K views"
                 timestamp="5 weeks ago"
                 channel="Hydra clone"
                 avatar="https://upload.wikimedia.org/wikipedia/en/7/7f/ARC_Hydra_%28Baja_California%29.png"
                 image="https://i.ytimg.com/vi/iMURw9nwXJA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBnJAUiCLakTHaUdqNBgqFH67ijFg"/> 

                <Videocard  title ="Youtube vs Tiktok"
                    views="1.6M views"
                    timestamp="4 days ago"
                    channel="Carryminati"
                    avatar ="https://upload.wikimedia.org/wikipedia/commons/4/49/Ajey_Nagar.jpg"
                    image="https://i.ytimg.com/vi/Q9eh308Mstc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUZeMspaz9FlYHRM4oq965ESKucA"/> 
                <Videocard title ="Epic Boys Dance in backyard"
                    views="20M views"
                    timestamp="2 years ago"
                    channel="Have a video"
                    avatar ="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                    image="https://i.picsum.photos/id/880/200/200.jpg?hmac=g5VV-eqqKk9TdTvkzKu6PzjRtzrqVhrj6v7H9ZT7PDo"/> 
                <Videocard title ="CKay- Emiliana [Official Audio]"
                    views="2M views"
                    timestamp="2 weeks ago"
                    channel ="CKay"
                    avatar="https://i0.wp.com/wikiofcelebs.com/wp-content/uploads/2021/09/CKay.webp?w=500&ssl=1"
                    image="https://i.ytimg.com/vi/MxjrsDV8Aeo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCrxDzAbp9-GR2PU4s-dOpSgFVqxw
                    "/> 
                <Videocard title ="Harry Potter 20th Anniversary"
                    views="4M"
                    timestamp="15 hours ago"
                    channel="HBO Max"
                    avatar="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
                    image="https://i.ytimg.com/vi/fFGS4zZWGoA/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCb_fhAXkt-bEaZbmInqb6yZAzY-g"/>
                    <Videocard  title ="Youtube vs Tiktok"
                    views="1.6M views"
                    timestamp="4 days ago"
                    channel="Carryminati"
                    avatar ="https://upload.wikimedia.org/wikipedia/commons/4/49/Ajey_Nagar.jpg"
                    image="https://i.ytimg.com/vi/Q9eh308Mstc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUZeMspaz9FlYHRM4oq965ESKucA"/> 
                <Videocard title ="Epic Boys Dance in backyard"
                    views="20M views"
                    timestamp="2 years ago"
                    channel="Have a video"
                    avatar ="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                    image="https://i.picsum.photos/id/880/200/200.jpg?hmac=g5VV-eqqKk9TdTvkzKu6PzjRtzrqVhrj6v7H9ZT7PDo"/> 
                <Videocard title ="CKay- Emiliana [Official Audio]"
                    views="2M views"
                    timestamp="2 weeks ago"
                    channel ="CKay"
                    avatar="https://i0.wp.com/wikiofcelebs.com/wp-content/uploads/2021/09/CKay.webp?w=500&ssl=1"
                    image="https://i.ytimg.com/vi/MxjrsDV8Aeo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCrxDzAbp9-GR2PU4s-dOpSgFVqxw
                    "/> 
                <Videocard title ="Harry Potter 20th Anniversary"
                    views="4M"
                    timestamp="15 hours ago"
                    channel="HBO Max"
                    avatar="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
                    image="https://i.ytimg.com/vi/fFGS4zZWGoA/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCb_fhAXkt-bEaZbmInqb6yZAzY-g"/>  
            </div>
        </div>
    );
}

export default Mainsection
