import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar.jsx'
import HomePage from './Home/HomePage'
import NotFound from './NotFound/NotFound'

function App() {

  return (
    <>
    <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </div>
      
    </>
  )
}

export default App
