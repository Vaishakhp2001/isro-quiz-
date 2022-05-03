import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Main from './components/Main';

const MCQ = () => {

  const navigate = useNavigate()

  return (
    
    <div>
      <Main/>
        <Card className='card-1'>
          <Card.Header className='card-header1'>
            <h2>Select Subject</h2>
          </Card.Header>
          <Card.Body>
            <div className='div-1' onClick={() => navigate("/MCQ/space_crafts")}>
              <p>Space Crafts</p>
            </div>
            <div className='div-1' onClick={() => navigate("/MCQ/space_crafts")}>
              <p>Satelites and countries</p>
            </div>
            <div className='div-1' onClick={() => navigate("/MCQ/space_crafts")}>
              <p>Space Launchers</p>
            </div>

          </Card.Body>
        </Card>
    </div>
  )
}

export default MCQ