import React from "react";
import  "./MovieContentPage.css";
import {Badge} from "@material-ui/core"


const baseURL = 'https://image.tmdb.org/t/p/'
     const pictureSize = 'w300'

const MovieContentPage=({
    id,
    poster,
    media_type,
    title,
    vote_average,
    popularity,
    date,
})=>{
    return(
        <div className="movieimg">
            <Badge badgeContent={vote_average}  color="primary"/>
            <img className="movieposter" src={`${baseURL}${pictureSize}${poster}`}/>


            <span className="movieTitle">
            {/* {popularity}<br/>
            <span>{date}</span> */}
            
            </span>
        </div>
    )
}

export default MovieContentPage;