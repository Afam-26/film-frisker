
import React, { useState, useEffect } from 'react';

import axios from "axios"
import Content from "../../components/Content/Content"
 import "./Trending.css"


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
                        title={value.title || value.name}
                        date={value.release_date || value.first_air_date}
                        media_type={value.media_type}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Trending

