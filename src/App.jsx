import React from 'react'
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
