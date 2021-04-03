import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import  MovieContentPage from "../../components/MovieContentPage/MovieContentPage"

function Movies(){
    const[movieContent,setMovieContent]=useState([]);
    const getMovies=async()=>{
        const{data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
        //console.log(data);
        setMovieContent(data.results);
    }

   useEffect(()=>{
       getMovies();
   },[]);
   
    return(
        <>
        <div>
            <span className="pageTitle">Movies</span>
            <div className="trending" >
                    {movieContent.map((value)=>(
                        <MovieContentPage key={value.id}
                                  id={value.id}
                                  poster={value.poster_path}
                                  title={value.title}
                                  date={value.release_date}
                        />   // unique key for children
                    ))}
                </div>
        </div>
        </>
    )
}

export default Movies