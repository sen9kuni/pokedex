import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DetailPokemon from './pages/DetailPokemon';

// pages
import Home from './pages/Home';
// pages

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:name' element={<DetailPokemon />} />
    </Routes>
  );
}

export default App;
