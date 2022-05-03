import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Main from './components/Main'

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <Main />
      <div>
        <Card className='card-1'>
          <Card.Header className='card-header1'>
            <h2 >Select Section</h2>
          </Card.Header>
          <Card.Body>
            <div className='div-1' onClick={() => navigate("/simple-learning")}>
              <p>Simple Learning </p>
            </div>
            <div className='div-1' onClick={() => navigate("/MCQ")}>
              <p>MCQ</p>
            </div>
          </Card.Body>

        </Card>
      </div>
    </div>
  )
}

export default HomePage