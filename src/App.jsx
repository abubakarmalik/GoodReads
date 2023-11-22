import React from 'react'
import Home from './layouts/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import BookListing from './layouts/BookListing'
import SingleBook from './components/SingleBook'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allbooks/:query' element={<BookListing />} />
          <Route path='/singlebook/:id' element={<SingleBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
