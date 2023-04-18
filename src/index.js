import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Resetpassword from './components/forgot-password';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// get the root of the app
const root=ReactDOM.createRoot(document.getElementById('root'));

// render the page
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/student/login/forgotPassword' element={<Resetpassword/>}></Route>
    </Routes>
  </Router>
)