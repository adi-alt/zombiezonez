import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import axios from "../services/axios";
import "./row.css";
import HalfRating from "./HalfRating";
import TypeWriterEffect from "react-typewriter-effect";
function Row({ title, fetchurl, ismain, ishori }) {
  const baseurl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [moviesel, setMoviesel] = useState({});
  const [det, setDet] = useState("");
  const [rating, setRating] = useState(0);
  const API_KEY = "8e52c51f7d65ec583c5e477848524554";
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchurl);
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchurl]);
  const fetchMovie = async (id,movie) => {
    const urrl = `/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const { data } = await axios.get(urrl);
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer.key : data.videos.results[0].key);
      console.log(trailer.key);
    }
    return data;
  };
  const selectMovie = async (movie) => {
    const data = await fetchMovie(movie.id,movie);
    console.log(data);
    setMoviesel(data);
  };
  const Details = async (movie) => {
    console.log(movie.original_title);
    // console.log(movie.vote_average/2);
    setRating(movie.vote_average / 2);
    setDet(movie?.title || movie?.original_name || movie?.name);
    return det;
  };

  return (
    
    <div>
      <h1 className="tit">{title}</h1>
      <div className="con">
        <div className="row_area">
          {movies.map((movie) => (
            <>
            {movie.poster_path?(
              
                <div className="dum">
             
              <img
                onClick={(e) => {
                 e.preventDefault();
                  selectMovie(movie);
                  setPlaying(true);
                  // ()=>{
                  //   localStorage.setItem("movie",moviesel.overview);
                  //   localStorage.setItem("trailerkey",trailer);
                  //   navigate("./moviedetail")
                  // }
                  // console.log("heuy");  
                  // handle(movie);
                }}
                key={movie.id}
                src={`${baseurl}${
                  ismain ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                className={`row-item ${ishori && "row-hori"}`}
                onMouseEnter={() => {
                  Details(movie);
                }}
                onMouseLeave={() => {
                  Details({});
                }}
              />
              <div
                className="humpty"
                onMouseEnter={() => {
                  Details(movie);
                }}
                onMouseLeave={() => {
                  Details({});
                }}
              >
                <h1>
                  {det ===
                    (movie?.title || movie?.original_name || movie?.name) &&
                    det}
                </h1>
                {console.log(rating)}
                {det ===
                  (movie?.title || movie?.original_name || movie?.name) && (
                  <HalfRating valu={rating} />
                )}

                {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString())
                      .start();
                  }}
                /> */}

                {/* <Typography component="legend">Read only</Typography> */}
                {/* <Rating name="read-only" value={5} readOnly /> */}
                {/* <Rating name="disabled" value={5} disabled /> */}
                {det ===
                  (movie?.title || movie?.original_name || movie?.name) && (
                  <TypeWriterEffect
                    startDelay={100}
                    cursorColor="white"
                    text={movie.overview}
                    typeSpeed={12}
                    textStyle={{
                      // fontFamily: 'Red Hat Display',
                      // color: '#3F3D56',
                      fontWeight: 500,
                      fontSize: '15px',
                    }}
                    // scrollArea={myAppRef}
                  />
                )}
              </div>
    
              </div>
            
            ):<div></div>}
            
            </>
          ))}
          {/* {(det==movie.original_title)&&det} */}
        </div>
      </div>
      {console.log(trailer)}
      {console.log(moviesel.overview)}
      {/* {trailer&&<YouTube videoId={trailer} opts={opts} />} */}
      {playing && <Popup trailerKey={trailer} movie={moviesel} />}
      {/* {trailer&&<iframe src={`https://youtu.be/${trailer}`} height={opts.height} width={opts.width}/>} */}
      {/* {moviesel.video ? rendertrail() : null} */}
    </div>
  );
}
// string intabulation
export default Row;
