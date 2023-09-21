import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Characters from './pages/Characters'
import Character from './pages/Character'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>

      
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/character/:id' element={<Character />} />
        </Routes>

      


    </>
  )
}

export default App
