import React, { useEffect, useState, useRef } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Main from './components/Main'

const Question = (props) => {

  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(10)
  const [question, setQuesion] = useState('')
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)
  const [time, setTime] = useState(true)

  const question1 = props.data

  const navigate = useNavigate()

  const updateTimer1 = () => {

    setTimeout(() => {

      setTimer(timer - 1)

    }, 1000)

  }

  useEffect(() => {

    const timout1 = setTimeout(() => {

      setTimer(timer - 1)

    }, 1000)


    if (timer == 0) {

      setCount(count + 1)

      setTimer(10)

    }

    console.log(count)

    if (count === question1.length - 1) {
      setResult(true)

     
    }

    return() => {

      clearTimeout(timout1)

     
    }


  }, [count,timer])

  const increment = () => {

    setCount(count + 1)

    setTimer(10)

  }

  const handleChange = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1)
    }

  }

  const checkboxRef = useRef(null);

  return (

    <div>
     <Main/>
      <Card className='card-2'>
        {result ? <>
          <Card.Header>
            <h2>Result</h2>
          </Card.Header>
          <Card.Body>

            <p>Your Score is {score}</p>
          </Card.Body>
        </> : <>
          <Card.Header className='card-header1'>
            <h2>Quesion</h2>
          </Card.Header>
          <p>{count+1}. {question1[count].question}</p>
          {question1[count].answer.map((obj) =>
            <Form.Check type='radio' label={obj.ans} className='mt-4' name='answer' id={obj.ans} value={obj.ans}
              onChange={e => handleChange(obj.isCorrect)} ref={checkboxRef}/>
          )
          }
          <p>{timer} seconds remaining</p>
          {count != question1.length ? <Button className='button' onClick={increment}>Next</Button> : <></> }
        </>}
      </Card>

    </div>

  )
}

export default Question