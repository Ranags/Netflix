import React, { useEffect, useState } from 'react'
import './Row.css';
import  axios from './axios'



function Row({fetchUrl ,  title  ,isLargeRow = false,overview,popularity}) {

    const [movies, setMovies]  = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    

    useEffect(() => {
     
async function fetchData() {

    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;

}
fetchData();

   
    }, [fetchUrl ])

    return (
        <div className="row">
           <h1>{title}</h1>
           <h2>{overview}</h2>
           <p>{popularity}</p>
                     
           
            <div className="row__posters">

            {
                movies.map((movie,name,overview) => (
                        
                   
                    <img 
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                     
                     key={movie.id} 
                     src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}></img>
                
                    
                ))
            }
            </div>
            
        </div>
    )
}

export default Row
