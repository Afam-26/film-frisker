import React from "react";


function Search(props){
    return(
        <>
        <div>
            <span className="pageTitle">Search</span>
            <input 
                    onChange ={props.onSearchMovies}                    
                    type="text"
                    placeholder="Movie name"
                    name="moview"
                    size="40" 
                          
                />
            <button onClick={(e) => props.onSearchMovies(e.target.value)}>Click here</button>
        </div>
        </>
    )

}

export default Search