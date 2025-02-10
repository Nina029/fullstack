import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => {
    setGood(good + 1)
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const handleBadFeedback = () => {
    setBad(bad + 1)
  }

  const sum = good + neutral + bad

  const average = (good - bad)/sum 

  const positive = good/sum*100
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodFeedback} text='good' />
      <Button onClick={handleNeutralFeedback} text='neutral' />
      <Button onClick={handleBadFeedback} text='bad' />
      <h1>statistics</h1>
      <p>Good {good} <br></br>
      Neutral {neutral}<br></br>
      Bad {bad}</p><br></br>
      All {sum}<br></br>
      Average {average}<br></br>
      Positive {positive} %
    </div>
  )
}

export default App
