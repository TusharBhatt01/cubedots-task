import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Building from './components/Building';
import Apartment from './components/Apartment';
import Location from './components/Location';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path="/home" element={<Home />}></Route> 
        <Route path="/building" element={<Building />}></Route>
        <Route path="/apartment" element={<Apartment />}></Route>
        <Route path="/location" element={<Location />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
