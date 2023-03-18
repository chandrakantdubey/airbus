import { Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from "react"

import Home from "./components/home/Home"
import Login from './components/login/Login'
import Register from './components/login/Register'
import Flights from "./components/flights/Flights"
import Checkout from './components/checkout/Checkout'

import './app.css'


function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login setLoggedIn={setLoggedIn}/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/flights" exact element={<Flights/>} />
        <Route path="/checkout" exact element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
