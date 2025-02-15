import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine=({text, value}) => {
  return(
    <tr>
      
      <td>{text}</td> 
      <td>{value} </td>
      
    </tr>
    )
}

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
  
  let sum =good+bad+neutral
  let average = (good - bad)/(sum)
  let positive = (good)/(sum)*100
  
  if(sum===0){
    return (<div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodFeedback} text='good' />
      <Button onClick={handleNeutralFeedback} text='neutral' />
      <Button onClick={handleBadFeedback} text='bad' />
      <h1>statistics</h1>
      No feedback given
    </div>)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodFeedback} text='good' />
      <Button onClick={handleNeutralFeedback} text='neutral' />
      <Button onClick={handleBadFeedback} text='bad' />
      <h1>statistics</h1>
      <table>
        <tbody>
      
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="All" value ={sum} />
      <StatisticLine text="Average" value ={average} />
      <StatisticLine text="Positive" value ={positive} />
     
      
      </tbody>
      </table>
    </div>
  )
}

export default App
