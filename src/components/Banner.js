import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import requests from "../services/request";
import "./banner.css";
import Popup from "./Popup";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState("");
  const API_KEY = "8e52c51f7d65ec583c5e477848524554";
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(
        requests[Math.floor(Math.random() * requests.length)].fetchu
      );
      //   console.log(request);
      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchdata();
  }, []);
  function truncate(str,n){

    return str?.length > n ? str.substr(0,n) + "..." : str;
  }

  const fetchMovie = async (id) => {
    const urrl = `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const { data } = await axios.get(urrl);
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    return data;
  };


  const selectMovie = async (movie) => {
    const data = await fetchMovie(movie.id);
    console.log(data);
    setMovie(data);
  };
  return (
    <div
      className="banner-background"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
      }}
    >
      <div className="banner-information">
        <div>
          <h1 className="title">
            {movie?.title || movie?.original_name || movie?.name}
          </h1>
          
           <button className="banner_button" onClick={()=>{
             selectMovie(movie);
             setPlaying(true);
           }}>Play</button>
           <button className="banner_button">My List</button> 
          
          <h2>{truncate(movie.overview,200)}</h2>
        </div>
      </div>
      {playing&&<Popup trailerKey={trailer.key} movie={movie} className="same"/>}
      <div className="blender1"></div>
      <div className="base"></div>
    </div>
     

    
  );
}

// string intabulation
export default Banner;
