import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Resetpassword from './components/forgot-password';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Changepassword from './components/reset-password';
import Dashboard from './components/dashboard';
import NotFound from './components/not-found';

// get the root of the app
const root=ReactDOM.createRoot(document.getElementById('root'));

// render the page
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/student/login/forgotPassword' element={<Resetpassword/>}></Route>
      <Route path='/student/login/forgotPassword/resetPassword' element={<Changepassword/>}></Route>
      <Route path='/student/dashboard' element={<Dashboard/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </Router>
)