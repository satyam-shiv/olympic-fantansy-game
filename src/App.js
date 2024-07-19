import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./component/Login";
import { useState } from 'react';

function App() {
     
  const [username, setUsername] = useState('');

  return (
    
    <Router>
        <Navbar username={username}/>
         <Routes>
            <Route path='/login' element={<Login  setUsername={setUsername}/>}/>
         </Routes>
      </Router>
  );
}

export default App;

