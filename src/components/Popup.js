import React from "react";
import YouTube from "react-youtube";
import "./popup.css";
import { useState ,useEffect} from "react";
function Popup({ trailerKey, movie }) {
  const [closed, setClosed] = useState(false);
  const [w,setW] = useState(window.innerWidth);
  const [h,setH] = useState();
  useEffect(() => {
    if(window.innerWidth>1000){
    
      setH(500);
    }
    else if(window.innerWidth>600){
      setH(300);
    }
    else if(window.innerWidth<600){
      setH(200);
    }
    setW(window.innerWidth);
  }, [w]);
  // const update = ()=>{
  //   setInterval(() => {
  //     if(window.innerWidth>1000){
  //       setH(500);
  //     }
  //     else if(window.innerWidth>600){
  //       setH(300);
  //     }
  //     else if(window.innerWidth<600){
  //       setH(200);
  //     }
     
  //   }, 5);
  // }
  const opts = {
    height: h,
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return !closed ? (
    <div className="main-con">
      <div className="coh">
        <div className="content">
          {/* {update()} */}
          <YouTube videoId={trailerKey} opts={opts} className="youtube" />
          <div className="tube">
            <h1>Brief Info</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
        <button
          onClick={() => {
            setClosed(true);
            // setTrkey("");
          }}
          className="gg"
        >
        </button>
      </div>
    </div>
  ) : null;
}

export default Popup;
