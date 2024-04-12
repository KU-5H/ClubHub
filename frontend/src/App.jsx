import { useState, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import Home from './pages/Home';
import Finances from './pages/Finances';
import Communication from './Communication';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminCalender from './pages/AdminCalender'
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {

  const [showNavbar, setShowNavbar] = useState(true);

  return  (
    <UserContextProvider>
      {showNavbar && <Navbar />}
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/> 
      <Routes>
        <Route path='/' element={ <About />} />
        <Route path='/calender' element={<AdminCalender />}></Route>
        <Route path='/finances//*' element={<Finances />} />
        <Route path='/communication' element={<Communication />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register setShowNavbar={setShowNavbar}/>}></Route>
        <Route path='/login' element={<Login setShowNavbar={setShowNavbar}/>}></Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
