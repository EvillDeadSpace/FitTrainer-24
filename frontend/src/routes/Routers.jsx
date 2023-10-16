import Home from '../pages/Home'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Notfound from '../pages/Notfound'
import CoachDetails from '../pages/Coach/CoachDetails'
import Coach from '../pages/Coach/Coach'

import { Route, Routes } from 'react-router-dom'


const Router = () => {

   return <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/coach' element={<Coach />} />
      <Route path='/coach/:id' element={<CoachDetails />} />
      <Route path='/notfound' element={<Notfound />} status={404} />
      <Route path='*' element={<h3>Test</h3>} status={404} />
   </Routes>


}

export default Router