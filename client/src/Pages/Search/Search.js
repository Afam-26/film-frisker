import React from "react";
import { useEffect, useState } from "react";
import MovieContentPage from "../../components/MovieContentPage/MovieContentPage"
function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [movieContent, setMovieContent] = useState([]);
    // const darkTheme=createMuiTheme({
    //     palette:{
    //         type:“dark”,
    //         primary:{
    //             main:“#fff”
    //         },
    //     },
    // });
    useEffect(() => {
    }, [])
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=`;
    //setMovieContent(data.results);
    //    setMovieContent(data.results);
const handleSubmit = (e) => {
    e.preventDefault();

    if(searchValue){

    fetch(SEARCH_API + searchValue)
        .then((res) => res.json())
        .then((data) => {
            setMovieContent(data.results);
        });
    setSearchValue("");
};

}



const handleChange = (e) => {
    setSearchValue(e.target.value);
}




return (
    <>
        <form onSubmit={handleSubmit}>
            <input style={{width:"100%",borderRadius:"50px", marginTop:"10px", padding:"20px" , raduis:"50px", marginLeft:"5px",color:"#F94144",backgroundColor:"#D8E2DC"}}
                className="search"
                type="search"
                placeholder="Search for movies and press Enter"
                value={searchValue}
                onChange={handleChange}
            />
        </form>
        <div className="trending" >
                    {movieContent.map((value)=>(
                        <MovieContentPage key={value.id}
                                  id={value.id}
                                  poster={value.poster_path ? value.poster_path:"https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=282&q=80"}
                                  title={value.title}
                                
                                  date={value.release_date || value.first_air_date}
                                  popularity={value.popularity}
                                  vote_average={value.vote_average}
                        />   // unique key for children
                    ))}
                </div>
    </>
);
}
export default Search