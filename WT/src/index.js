import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About'
import Contact from './Components/Contact';
import Home from './Components/Home';
import Help from './Components/Help';
import ArrayTable from './Components/ArrayTable';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/Home" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      {/* <Route path="/student" element={<ArrayTable/>}/> */}
      <Route path="/help" element={<Help/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
);
reportWebVitals();