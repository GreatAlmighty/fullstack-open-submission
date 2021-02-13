import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  const [maxVote, setMaxVote] = useState(0)

  const setVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    setMaxVote(copy.indexOf(Math.max(...copy)))
  }

  const randomize = (maxRange) => () => {
    const randomValue = Math.floor((Math.random() * maxRange) + 1) - 1
    setSelected(randomValue)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br/><div>has {points[selected]} votes</div><br/>
      <Button handleClick={ () => setVote() } text={'vote'} />
      <Button handleClick={ randomize(props.anecdotes.length) } text={'next anecdote'} />
      <br/><br/>
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[maxVote]}
      <br/><div>has {points[maxVote]} votes</div><br/>
    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)