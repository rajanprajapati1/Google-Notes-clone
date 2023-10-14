import React from 'react'
import MainPage from './Pages/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import SearchResult from './Pages/SearchResult';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/search/:value' element={<SearchResult/>} />
        <Route path='/sr' element={<SearchResult/>}/>
      </Routes>
    </Router>
  )
}

export default App
