import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Logement from './pages/Logement';



function App() {
  return (
      <BrowserRouter> 
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About /> } />
          <Route path= "/logement/:id" element = {<Logement/>}/>
          <Route path="*" element = {<Notfound />} />
        </Routes>
      </BrowserRouter>
      
  );
}
export default App;