import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Banner.css';
import request from './request';
function Banner() {
    const [movie, setMovie] = useState([]); //Used to create random movie for the banner, keeps it dynamic
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "...": str;
    } //limits the amount of text shown and adds "..." after the given number of characters ('n') is shown 
    
    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(request.fetchAction);
            setMovie(
                requests.data.results[Math.floor(Math.random() * requests.data.results.length-1)]
                );//will randomly fetch a movie based on length, we -1 to avoid going over length, and once random number is chosen, it will be set to cooresponding movie
            return requests;
        }
        fetchData();
    }, []); //run once when the banner is loaded, given by empty []
        console.log(movie);
    return (
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition:"center center",
            }} //define background image of requested movie, size, and position
            >
        <div className="bannerContent">
        <h1 className="bannerTitle"> 
            {movie?.title || movie?.name || movie?.original_name} 
            {/* requests banner by title, if title doesn't exist then movie name, or original name, with descending priority*/}
        </h1>
        <div className="bannerButtons">
            <button className="bannerButton">Play</button>
            <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">{movie?.overview}
        {truncate(movie?.overview,150)}
        </h1>
        </div>
        <div className="fadeBottom"></div>  
        </header>
    )
}

export default Banner
