import React from "react";
import  "./MovieContentPage.css";
import { Badge } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios";


const baseURL = 'https://image.tmdb.org/t/p/';
const pictureSize = 'w300';


const MovieContentPage=({
    id,
    poster,
    media_type,
    title,
    vote_average,
    popularity,
    date,
}) => {
    
    const addFave = () => {
        console.log(id, poster, title, vote_average, date)
        axios.post("/api/movies", {
            id,
            poster,
            title,
            vote_average,
            date,
        
        // date,
        }).then(response => {
        console.log(response.data)
    })
    }
    return(
        <div className="movieimg">
            <Badge badgeContent={vote_average} color="primary"  />
            {/* favorite button goes here */}
            <IconButton aria-label="Add to favorites" onClick={addFave} >
                    <FavoriteIcon />
            </IconButton>
            
            <img className="movieposter" src={`${baseURL}${pictureSize}${poster}`}/>

            <span className="movieTitle">
            {/* {popularity}<br/>
            <span>{date}</span> */}
            
            </span>
        </div>
    )
}

export default MovieContentPage;