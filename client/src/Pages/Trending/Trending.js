
import React, { useState, useEffect } from 'react';
import axios from "axios"
import Content from "../../components/Content/Content"
// import "./Trending.css"


function Trending() {
    const [trendingdata, setTrendingData] = useState([])

    // destructing the {data}
    const getTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
        );

        console.log(data);
        setTrendingData(data.results)
    };

    //calling the function
    useEffect(() => {
        getTrending();
    }, [])

    return (
        <>
            <div>
                <span className="pageTitle">Trending</span>
                <div className="trending" >
                    {trendingdata.map((value) => (
                        <Content key={value.id}
                            id={value.id}
                            poster={value.poster_path}
                        />   // unique key for children
                    ))}
                </div>

            </div>
        </>
    )
}

export default Trending


// const [movies, setMovies] = useState([])

    //  useEffect(()=> {
    //      const getTrending =async()=> {

    //         const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`)
    //         const {results} = await response.json()
    //         setMovies(results)
    //     }
    //     getTrending()
    //  },[])


    //  const test = {
    //     adult: false,
    //     backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
    //     genre_ids: [28, 12, 14, 878],
    //     id: 791373,
    //     media_type: "movie",
    //     original_language: "en",
    //     original_title: "Zack Snyder's Justice League",
    //     overview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    //     popularity: 11462.725,
    //     poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    //     release_date: "2021-03-18",
    //     title: "Zack Snyder's Justice League",
    //     video: false,
    //     vote_average: 8.7,
    //     vote_count: 3529
    //  }

    //  const trendingMap =  movies.map((el, index) => {
    //      const baseURL = 'https://image.tmdb.org/t/p/'
    //      const pictureSize = 'w300'


    //     return (
    //         <div key={index} style={{height: '400px', 
    //                                 width: '250px',
    //                                 backgroundImage: `linear-gradient(to top, black, transparent, transparent), url(${baseURL}${pictureSize}${el.poster_path})`}}>

    //             <p>{el.overview}</p>
    //         </div>
    //     )

    //  })
