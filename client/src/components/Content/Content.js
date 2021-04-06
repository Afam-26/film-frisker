
import React from "react";

import  "./Content.css";
import  InfoModal from "../../components/InfoModal/InfoModal"




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
            
            </span>



             <p classname="title">{title} </p> 
            
            
    
        </InfoModal>
    )
}

export default Content;