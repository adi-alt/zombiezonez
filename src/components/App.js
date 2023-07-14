import React from "react";
import "./App.css";
import Row from "./Row";
import request from "../services/request";
import Banner from "./Banner.js";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Scroll from "./Scroll";
import mainbg from "../images/mainbg.mp4"
function App() {
  return (
      <>
      <Navbar/>
      <Banner/>
      <Scroll/>
      <div className="App">
      <div className="homecont">
      <video src={mainbg} autoPlay loop muted/>
      </div>
      <Row title="ORIGINALS" fetchurl={request[1].fetchu} ismain={true}/>
      <Row title="TRENDING NOW" fetchurl={request[0].fetchu} ishori = {true}/>
      <Row title="TOP RATED" fetchurl={request[2].fetchu} ishori = {true}/>
      <Row title="ACTION MOVIES" fetchurl={request[3].fetchu} ishori = {true}/>
      <Row title="COMEDY MOVIES" fetchurl={request[4].fetchu} ishori = {true}/>
      <Row title="HORROR MOVIES" fetchurl={request[5].fetchu} ishori = {true}/>
      <Row title="ROMANCE MOVIES" fetchurl={request[6].fetchu} ishori = {true} />
      <Row title="KIDS WORLD" fetchurl={request[7].fetchu} ishori = {true}/>
      </div>
      <Footer/>
      </>
  );
}

export default App;
