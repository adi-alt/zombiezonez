import React from 'react'
import Lottie from 'lottie-react'
import Icon from '../images/loader.json'
const Loader = () => {
  return (
    <Lottie animationData={Icon} style={{marginTop:'-25vh',width:'100vw',height:'100vh',display:'flex',position:'absolute',justifyContent:'center',alignItems:'center'}}/>
  )
}

export default Loader