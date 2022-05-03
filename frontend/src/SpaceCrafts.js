import React from 'react'
import { Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { useNavigate } from 'react-router-dom'
import Main from './components/Main'

const SpaceCrafts = () => {

    const navigate = useNavigate()

    return (

        <div>
            <Main/>
            <Card className='card-1'>
                <Card.Header className='card-header1'>
                    <h2>Select level</h2>
                </Card.Header>
                <Card.Body>
                    <div className='div-1' onClick={() => navigate("/MCQ/space_crafts/Easy")}>
                        <p>Easy</p>
                    </div>
                    <div className='div-1' onClick={() => navigate("/MCQ/space_crafts/Medium")}>
                        <p>Medium</p>
                    </div>
                    <div className='div-1' onClick={() => navigate("/MCQ/space_crafts/Hard")}>
                        <p>Hard</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default SpaceCrafts