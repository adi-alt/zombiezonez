import React,{useState} from 'react'
import './login.css'
import vidbg from '../images/mainbg.mp4'
import Sign from './Sign';
import Signup from './Signup';
import Icon from '../images/logo.json'
import Lottie from 'lottie-react';
import Icon1 from '../images/base.json'
function Login(){
    const [signIn,setsignIn] = useState(false);
    const [newBie,setnewBie] = useState(false);
  return (
    <div className="login">
        <Lottie animationData={Icon1} style={{position:'absolute',zIndex:'1',width:'100%',    height: "99.6%",webkitFilter:'blur(2px)'}}/>
        <video src={vidbg} autoPlay loop muted/>
        <div className="nav-container" style={{justifyContent:'flex-start',paddingLeft:'2%'}}>
            <div className="logo-container" > 
            <Lottie animationData={Icon} style={{width:'100px'}}/>
            <div className="adi2">
                <a href="/">
                    ZOmBiezz ZOneE
                </a>
            </div>
            <div className="blender9">
                h
        </div>
            </div>
        </div>
        <div className='loginbody'>
            {(signIn || newBie)?(
                <>
                {signIn?(<Sign/>):(<Signup/>)}
                </>
            ):(
                <>
                <div className='cont' style={{height: '100vh',width:'100vw'}}>
                <h1 style={{fontSize:'40px',fontWeight:'bolder'}}>
                    Welcome Back ZOMBIEE!! Let The Chill Seshhh Startt
                </h1>
                <h3>Enter The login Info Bruh if not then make it fasssss!!!!!</h3>
                <div className="logininput">
                    <form>
                        <button onClick={()=> setnewBie(true)}
                        className="NewB">NewZom in house</button>
                        <button onClick={()=> setsignIn(true)}
                        className="logininbutton">LetS ATTacK</button>
                    </form>
                </div>
                </div>
                </>
            )}
        </div>
    </div>
  )
}

export default Login;