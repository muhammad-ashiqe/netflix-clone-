import React, { useEffect, useState } from 'react'
import { API_KEY ,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {
     const[movie,setMovie] =useState()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            setMovie(Response.data.results[10])
        })



    }, [])

    function redirectToYouTube() {
        // Replace 'YOUR_YOUTUBE_VIDEO_URL' with the actual YouTube video URL
        var youtubeUrl = 'https://youtu.be/eQfMbSe7F2g?si=sCRkxLU4Mf5QCZlv';
        window.location.href = youtubeUrl;
      }
      


return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:" "})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title:" "} </h1>
                <div className='banner_buttons' >
                    <button className='button' onClick={redirectToYouTube}>Play</button>
                    
                </div>
                <h1 className='description'>{movie ? movie.overview:" "}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner