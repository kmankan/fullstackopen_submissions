import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <br></br>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      <br></br>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({value, text}) => {
  const [spaces, setSpaces] = useState(4);

  return (
    <div>
      {text}
      {'\u00a0'.repeat(spaces)} 
      {value}
    </div>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = props.total
  const average = (props.good - props.bad) / props.total
  const positive = `${props.good / props.total * 100} %`

  if (props.total === 0) {
    return (
      <div>
        <br></br>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="total" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </div>
  )  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)

    setTotal(updatedGood + neutral + bad) 
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)

    setTotal(good + updatedNeutral + bad) 
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)

    setTotal(good + neutral + updatedBad) 
  }

  const handleReset = () => {
    setGood(0)
    setNeutral(0)
    setBad(0)
    setTotal(0)
  }

  return (
    <div>
      <h1>
        give feedback
      </h1>
      
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <br></br>
      <br></br>
      <Button handleClick={handleReset} text='reset' />
      
      <h1>
        statistics
      </h1>

      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App
