import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux';
import Searchareaans from "../components/Searchareaans";
import { selectUser } from '../feaures/userSlice';
import Footer from '../components/Footer';
import mainbg from "../images/mainbg.mp4"
import Lottie from 'lottie-react';
import Icon from './nodata.json'
function Search (){
    const user = useSelector(selectUser);
    // console.log(user.val);
    return (
        <>
        <Navbar style={{top:'0',backgroundColor:'black'}}/>
        <div>
        {user && user.val?(
            <div style={{position:'relative',top:'-10px',backgroundColor:'black'}}>
                <Searchareaans title={user.val} fetchurl={`/search/movie?api_key=8e52c51f7d65ec583c5e477848524554&query=${user.val}`} ismain={true}/>
            </div>
        ):(
            <>
            <div style={{height:'90vh',width:'100vw',backgroundColor:'black',marginTop:'0px'}}>
            <h1 className="tit" style={{textAlign:'center',color:'white',paddingTop:'150px'}}>HAHAHAHA You FunnY??</h1>
                <video src={mainbg} autoPlay loop muted/>
                <Lottie animationData={Icon} style={{marginTop:'-20vh',width:'100vw',height:'100vh',display:'flex',position:'absolute',justifyContent:'center',alignItems:'center'}}/>
            </div>
            </>
        )}
         <Footer/>
        </div>
        </>
    )
}

export default Search