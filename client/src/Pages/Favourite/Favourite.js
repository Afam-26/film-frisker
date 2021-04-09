
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieContentPage from "../../components/MovieContentPage/MovieContentPage";



function Favourite() {
    const [favorite, setFavorites] = useState([])
   
    
    useEffect(()=>{
       getFavorites();
     } , [])
    const getFavorites=() => {
        axios.get("/api/movies").then((results) => {
            // console.log(results)
            setFavorites(results.data)
        })
    }
    console.log(favorite)

    // function removeFavorite(id) {

    //     axios.delete("/api/movies/" + id, {
    //         id: id
    //     }).then(response => {
    //         console.log(id)
    //     })
    // }

    return(
        <>
        
                <span className="pageTitle">Favourite</span>
                

<div className="trending" >
                {favorite.length && favorite.map((value) => (
                    <MovieContentPage key={value._id}
                        id={value._id}
                        poster={value.poster}
                        title={value.title || value.name}
                         date={value.release_date || value.first_air_date}
                         media_type={value.media_type} />
      
                ))}
            </div>

        </>
    )

}

export default Favourite

