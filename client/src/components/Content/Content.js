
import React from "react";


import  "./Content.css";
import  InfoModal from "../../components/InfoModal/InfoModal"


import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import "../AddFavorite.js"
import addFave from "../AddFavorite.js";



import  "./Content.css";

const baseURL = 'https://image.tmdb.org/t/p/'
     const pictureSize = 'w300'

const Content=({
    id,
    poster,
    media_type,
    title,
    
    date,
})=>{
    return(

        
             <InfoModal media_type={media_type} id={id}>
              

            <img className="poster" src={`${baseURL}${pictureSize}${poster}`}/>
            <span className="secTitle">
            {media_type ==="tv" ? "TV Series" : "Movie"}<br/>
             <span></span>{date} 

        <div className="trendingimg">
            <img className="poster" src={`${baseURL}${pictureSize}${poster}`}/>
            <span className="secTitle">
            {media_type === "Movie"}<br/>
            <span></span>{date}

            
            </span>




            <p className="title">{title} </p>
            
            
    
        </InfoModal>
    )
}

export default Content;