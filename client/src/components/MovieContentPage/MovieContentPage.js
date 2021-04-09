import React from "react";
import "./MovieContentPage.css";

// import {Badge} from "@material-ui/core"
// import FavoriteIcon from '@material-ui/icons/Favorite';

import { Badge } from "@material-ui/core"
import FavoriteIcon from '@material-ui/icons/Favorite';
import BackspaceIcon from '@material-ui/icons/Backspace';
import IconButton from '@material-ui/core/IconButton';
import { useEffect, useState } from "react";


import axios from "axios";




const baseURL = 'https://image.tmdb.org/t/p/';
const pictureSize = 'w300';



const MovieContentPage = ({
    id,
    poster,
    media_type,
    title,
    vote_average,
    popularity,
    date,

}) => {

    const [showFavorite, setShowFavorite] = useState("block");
    const [showDelete, setShowDelete] = useState("none");
    const pathname = window.location.pathname;

    useEffect(() => {
        if (pathname === "/movies") {
            setShowFavorite("block");
            setShowDelete("none");
        } else if (pathname === "/favourite") {
            setShowFavorite("none");
            setShowDelete("block");
        } else {
            setShowFavorite("none");
            setShowDelete("none");
        }
    }, [])

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

    function removeFavorite(id) {

        axios.delete("/api/movies/" + id, {
            id: id
        }).then(response => {
            console.log(id)
        })
    }


    const addDefault = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=282&q=80"
    }


    return (


        <div className="movieimg">
            <Badge badgeContent={vote_average} color="primary" />
            <IconButton style={{ display: showFavorite }} onClick={addFave} aria-label="Add to favorites">
                <FavoriteIcon className="heart" />
            </IconButton>
            <IconButton style={{display: showDelete}} onClick={()=> removeFavorite(id)} aria-label="Add to favorites" >
                    <BackspaceIcon  id='delete-favorite-button'value='REMOVE'/>
            </IconButton>

            <img className="movieposter" src={`${baseURL}${pictureSize}${poster}`} onError={addDefault} />


            <span className="movieTitle">
                {/* {popularity}<br/>
            <span>{date}</span> */}

            </span>
        </div>
    )
}


export default MovieContentPage
