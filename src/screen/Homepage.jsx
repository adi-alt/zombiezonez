import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import App from '../components/App'
import Search from './Search'
import Login from './Login'
import Logged from '../components/Logged'
const Homepage = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
    </Routes>
    <Routes>
      <Route exact path='/Log' element = {<Logged/>}>
        <Route exact path='home' element={<App/>}/>
        <Route exact path="search"element={<Search/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default Homepage