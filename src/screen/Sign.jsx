import React, { useState } from 'react'
import './sign.css'
import { auth ,googleauth,gitauth} from '../firebase';
import { signInWithEmailAndPassword ,signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import Icon from '../images/google.json';
import Icon1 from '../images/github.json';
function Signup(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errormsg,setErrormsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((authUser)=>{
      window.localStorage.clear("logout");
      window.localStorage.setItem("isloggedin","true");
      window.localStorage.setItem("signdata","welcome back");
      navigate('/log/home');
      console.log(window.localStorage.getItem("isloggedin"));
      console.log(authUser);
    }).catch((error)=>{
      console.log(window.localStorage.getItem("isloggedin"));
      setErrormsg(helper(error.message));
      console.log(errormsg)
    });
  }
  function helper(str){
    const n = str.length;
    var bool = 0;
    var temp = "";
    for (let i = 0; i < n; i++) {
      const ele = str[i];
      if(bool && ele!==')')temp+=ele;
      if(ele==='('){
        bool = 1;
      }
      if(ele===')'){
        break;
      }
    }
    return temp;
  }
  const googlesignin = ()=> {
    signInWithPopup(auth,googleauth).then((authUser)=>{
      window.localStorage.clear("logout");
      window.localStorage.setItem("isloggedin","true");
      navigate('/log/home');
      console.log(authUser);
    }).catch((error)=>{
      console.log(window.localStorage.getItem("isloggedin"));
      setErrormsg(helper(error.message));
      console.log(errormsg)
    });

    }
    const githubsignin = ()=> {
      signInWithPopup(auth,gitauth).then((authUser)=>{
        window.localStorage.clear("logout");
        window.localStorage.setItem("isloggedin","true");
        navigate('/log/home');
        console.log(authUser);
      }).catch((error)=>{
        console.log(window.localStorage.getItem("isloggedin"));
        setErrormsg(helper(error.message));
        console.log(errormsg)
      });
  
      }
    return (
      <div className='cony'>
          <div className='signscreen'>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
              <h1>Welcome Back ZOMB</h1>
              <input placeholder="EmaiL ZOMB" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <input placeholder="NO NoISe!" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <button type="submit" className="signbutt">LetS ATTacK</button>
          </form>
          <button type="submit" className="signbutt" onClick={googlesignin}>
            
            GooglE ZonE</button>
          <button type="submit" className="signbutt" onClick={githubsignin}>GithuB ZonE</button>
          <h3>{errormsg}</h3>
          </div>
      </div>
    )
  }

export default Signup



