import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'



function RowPost(props) {
    const [movies, setMovie] = useState([])
    const [urlid, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(Response => {
            console.log(Response.data)
            setMovie(Response.data.results)
        }).catch(err => {
            alert("Network Error")
        })
    })
    const opts = {
        height: '500px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response => {
           if(Response.data.results.length!==0){
            setUrlId(Response.data.results[2])
           }else{
            alert("No Trailers Found")
           }
           }
        )

    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies && movies.map((obj) =>

                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />

                )}
                
        

            </div>
          { urlid && <YouTube opts={opts} videoId={urlid.key}/>}

            
        </div>
    )
}

export default RowPost