import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
// General Views imports
import LandingPage from './views/LandingPage'
import MyProjects from './views/Projects'
import NotFound from './views/404_NotFound'

import './App.css'

function App() {

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/projects' element={<MyProjects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App