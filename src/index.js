import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// get the root of the app
const root=ReactDOM.createRoot(document.getElementById('root'));

// render the page
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}></Route>
    </Routes>
  </Router>
)