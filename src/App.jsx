import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navigation';
import Home from './Home';
import Finances from './Finances';
import Communication from './Communication';
import About from './About';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/finances' element={<Finances />} />
        <Route path='/communication' element={<Communication />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
