import Home from '../pages/Home'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Doctor from '../pages/Doctors/Doctor'
import DoctorDetails from '../pages/Doctors/DoctorDetails'

//napravi site not found kasnije 

import {Route , Routes, BrowserRouter } from 'react-router-dom'

const Router = () => {
  return <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/doctor' element={<Doctor/>} />
      <Route path='/doctor/:id' element={<DoctorDetails/>} />
      <Route path='*' element={<h1>Not Found</h1>} status={404} />
   </Routes> 
  

}

export default Router