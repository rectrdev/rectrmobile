import { useState } from 'react'
import {Routes, Route } from "react-router-dom";


import Homepage from './components/Homepage'
import Privacypage from './components/Privacypage'
import Redirectpage from './components/Redirectpage'
import Page404 from './components/Page404'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/privacy" element={<Privacypage />} /> 
        <Route path="/redirect" element={<Redirectpage />} /> 
        <Route path="*" element={<Page404 />} /> 
      </Routes>
    </>
  )
}

export default App
