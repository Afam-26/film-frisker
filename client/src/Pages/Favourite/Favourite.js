import React, { useState, useEffect } from "react";
import axios from "axios";
import  Content from "../../components/Content/Content"



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
    return(
        <>
        
                <span className="pageTitle">Favourite</span>
                

<div className="trending" >
                {favorite.length && favorite.map((value) => (
                    <Content key={value.id}
                        id={value.id}
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

// comment