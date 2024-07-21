import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Games from './component/Games';
import Home from './component/Home'; 

import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home username={username} />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;

