import React, {useState,useEffect} from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
const baseUrl = "https://image.tmdb.org/t/p/original";
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]) //react hook state, next fill up the array
    const [trailerUrl, setTrailerUrl] = useState(""); //captures trailer url when we click on thumbnail
    useEffect(() => {
        //communicate with tmdb to pull information as row loads
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); //[] blank bracket means to runs once and won't run again, dependent on movies so if movies changes, then it will run again
    const opts = { //specify property of youtube video height, width and forces autoplay
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1, 
        },
    };
    const handleClick = (movie) => {
        //will set up logic to clicking on thumbnail to get movie trailer
        if(trailerUrl) {setTrailerUrl(''); //if movie trailer is already open, this will close the window
    }
        else{
            movieTrailer(movie?.name || "") 
            .then(url => { //promises to get url
                const urlParams = new URLSearchParams (new URL(url).search);
                setTrailerUrl(urlParams.get('v')); //will give us back the end pieces of value in the url after v= in youtube.com/watch?v=
            }).catch(error=> console.log(error)) //catches error if error is given
        }   
    }
    console.log(movies);
    return (
        <div className="Row"v>
            {/* title of row */}
            <h2>{title}</h2>
            <div className="Row_poster"> 
            {/*row posters*/}
            {movies.map(movie => (
                <img 
                key={movie.id} //renders movie by id instead of whole row, used for optimization
                onClick={() => handleClick(movie)}
                className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))} {/*map will iterate through the array, img will fetch the movie poster, if "Trending Now" is requesting image, then it will request poster image, if any other row is requesting then it will fetch picture backdrop */}
            </div>
            {/* container holding posters */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> } 
        </div>
    )
}

export default Row
