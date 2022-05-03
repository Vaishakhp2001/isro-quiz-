import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap'
import HomePage from './HomePage';
import MCQ from './MCQ'
import SpaceCrafts from './SpaceCrafts';
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom';
import Question from './Question';
import Result from './Result';
import { question1,question2,question3 } from './Questions'
import Login from './components/Login';
import Register from './components/Signup'
import Navbar from './components/Main'
import Profile from './components/Edit'
import SimplyLearnig from './SimplyLearnig';

function App() {

  let user = localStorage.getItem('token')

  return (
    <Router>
      <Routes>
        {user && <Route path='/' exact element={<HomePage/>}/>}
        <Route path='/' exact element={<Navigate replace to='/login'/>}/>
        <Route path='/profile' element={<Profile data={user}/>} />
        <Route path='/MCQ' element={<MCQ/>} />
        <Route path='/simple-learning' element={<SimplyLearnig/>} />
        <Route path='/MCQ/space_crafts' element={<SpaceCrafts/>} />
        <Route path='/MCQ/space_crafts/Easy' element={<Question data={question1}/>} />
        <Route path='/MCQ/space_crafts/Medium' element={<Question data={question2}/>} />
        <Route path='/MCQ/space_crafts/Hard' element={<Question data={question3}/>} />
        <Route path='/MCQ/space_crafts/Easy/result' element={<Result />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
