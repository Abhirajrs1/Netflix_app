import React, {useState,useEffect} from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import './RowPost.css'

function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [id,setId]=useState("")
    useEffect(()=>{
        axios.get(props.url)
        .then(res=>{
            setMovies(res.data.results)
        })
        .catch((err)=>console.log(err))

    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      const handle=(id)=>{
       axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
       .then(res=>{
        if(res.data.results.length!=0){
            setId(res.data.results[0])
        }else{
            console.log("ARRAY EMPTY");
        }
       })
      }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>{
            return(
                <img onClick={()=>handle(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="POSTERS" />
           
                )})}
      </div>

       {id && <Youtube opts={opts} videoId={id.key}/>}
    </div>
  )
}

export default RowPost
