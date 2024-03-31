import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import Home from './pages/Home';
import Finances from './pages/Finances';
import Communication from './Communication';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}/> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/finances//*' element={<Finances />} />
        <Route path='/communication' element={<Communication />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
