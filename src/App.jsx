import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navigation';
import Home from './pages/Home';
import Finances from './pages/Finances';
import Communication from './Communication';
import About from './pages/About';

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
