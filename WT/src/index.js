import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Components/About'
import Contact from './Components/Contact';
import Home from './Components/Home';
import ArrayTable from './Components/ArrayTable';
import Layout from './Layout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <BrowserRouter>
  <Routes>
    <Route>
      <Route path="/Layout/Home" element={<Home />}/>
      <Route path="/Layout/contact" element={<Contact />}/>
      <Route path="/Layout/about" element={<About />}/>
      <Route path="/Layout/student" element={<ArrayTable/>}/>
    </Route>
      <Route path="/" element={<App />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/student" element={<ArrayTable/>}/>
  </Routes>
  </BrowserRouter>
  </>
);
reportWebVitals();