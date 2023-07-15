import React from "react";
// import logo from "./logo.png";
import { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../feaures/userSlice";
import Lottie from "lottie-react";
import Icon from "../images/searchicon.json"
import Icon1 from "../images/logo.json"
function Navbar() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [search,setSearch] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow1(true);
      } else {
        setShow1(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  

  // const searchMovie=()=>{
  //   if(search){
  //     console.log(search);
  //     useNavigate('/search');
  //     console.log(window.localStorage.getItem("name"));
  //   }else{
  //     window.localStorage.clear("name");
  //   }
  // }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(login({
      val:search,
    }))
    navigate('/log/search');
  }
  return (
    <div className="cooon">
      <div className={`navbar-con ${show && "nav-black"}`}>
        <div className="con1">
          <a href="/log/home">
          <Lottie animationData={Icon1} style={{width:' 80px',height:'90%',position:'relative',top:'0px'}}/>
          
          </a>
          
        </div>
        <div className="searchbutton">
        <form onSubmit={(e)=>{handleSubmit(e)}}>  
          <input type="text" placeholder=".. wut you looking for Zomb?"value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <Lottie animationData={Icon} style={{width:'30%',height:'200%',marginTop:'-40px'}}/>
        </form>
        </div>
        <div className={show1 && "blender"}></div>
        {/* <input type="text" /> */}
      </div>
      <div className={show1 && "base1"}></div>
      <a href='/'>
                <button onClick={()=>{window.localStorage.setItem("logout","true")}} style={{backgroundColor:'rgba(113 ,132, 151 ,0.5)',border:'none',borderRadius:'500px',height:'55px',fontWeight:'bolder',position:'fixed',zIndex:'10000',top:'50%',left:'10px',boxShadow:'0px 0px 20px 0px white',color:'white'}}>ZOmB SEsh OVer?</button>
              </a>
    </div>
  );
}
export default Navbar;
