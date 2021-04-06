import React from "react";

import  "./MovieContentPage.css";
import {Badge} from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';


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
  

    const addDefault=(e)=>{
        e.target.src="https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=282&q=80"
      }
   

    return(
        <div className="movieimg">
        
            <Badge badgeContent={vote_average}  color="primary"/>
            <img className="movieposter" src={`${baseURL}${pictureSize}${poster}` }  onError={addDefault} />

            <p className="maintitle">{title} </p>
            <span className="movieTitle">
            {popularity}<br/>
            <span>{date}</span>
            
            </span>



          
            
            
    
        </div>
    )
}

export default MovieContentPage;