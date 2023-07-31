import React, { useRef, useState } from 'react'
import Searchbar from './components/Searchbar';
import Login from './components/Login';
import Home from './components/Home';
import BusListCards from './components/BusListCards';
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [buses, setbuses] = useState([]);


  return (
    <div id="main">
      <div className='container'>
        {/* <Searchbar setbuses={setbuses} /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<>
            <Searchbar setbuses={setbuses} />
            <Home />
          </>} />
          <Route path='/buslistcard' element={<>
            <Searchbar setbuses={setbuses} />
            <BusListCards buses={buses} setbuses={setbuses} />
          </>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;










































































































