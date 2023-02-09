import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Voiture from './Composants/Voiture';
import Maison from './Composants/Maison';
import Perso from './Composants/Perso';
import NavBar from './Composants/NavBar';
import Home from './Composants/Home';
import Player from './Composants/Player';
import ExoCss from './Composants/ExoCss';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/voiture" element={<Voiture/>}/>
      <Route path="/maison" element={<Maison/>}/>
      <Route path="/perso" element={<Perso/>}/>
      <Route path="/player" element={<Player/>}/>
      <Route path="/exocss" element={<ExoCss/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
