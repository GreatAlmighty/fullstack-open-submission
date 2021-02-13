import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{ text }</button>

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const AllStats = ({ good, neutral, bad, text }) => <tr><td>{text}</td><td>{good + neutral + bad}</td></tr>

const AvgStats = ({ good, bad, text }) => <tr><td>{text}</td><td>{(((good*1) + bad*(-1))/3)/3}</td></tr>

const PositiveStats = ({ good, neutral, bad, text }) => <tr><td>{text}</td><td>{(good/(good + neutral + bad)) * 100} %</td></tr>

const Statistics = (props) => {
  const { good, neutral, bad } = props

  if (!good && !neutral && !bad) {
    return (
      <div><br/>No feedback given</div>
    )
  } else {
    return (
      <>
        <h2>statistics</h2>
        <table>
          <Statistic text={'good'} value={good} />
          <Statistic text={'neutral'} value={neutral} />
          <Statistic text={'bad'} value={bad} />
          <AllStats text={'all'} good={good} neutral={neutral} bad={bad} />
          <AvgStats text={'average'} good={good} bad={bad} />
          <PositiveStats text={'positive'} good={good} neutral={neutral} bad={bad} />
        </table>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={ () => setGood(good + 1) } text={'good'} />
      <Button handleClick={ () => setNeutral(neutral + 1) } text={'neutral'} />
      <Button handleClick={ () => setBad(bad + 1) } text={'bad'} />
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)