 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogInForm } from './login';
import { SignUpForm } from './signup';

const App = () => {
  return (
    <> 
    <Router>
    <Routes>
      <Route path="/" element={<LogInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  </Router>
  </>
  );
};


export default App;
