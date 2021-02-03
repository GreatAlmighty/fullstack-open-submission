import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const Header = (props) => {
//   console.log(props)
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// const Part = (props) => {
//   return (
//     <>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </>
//   )
// }

// const Content = (props) => {
//   return (
//     <>
//       <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </>
//   )
// }

// const Hello = ({name, age}) => {
//   const bornYear = () =>  new Date().getFullYear() - age

//   return(
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So, you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <>
//       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   const course = {
//     name: 'Half Stack application development',
//     parts:  [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//   }

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />

//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }

// const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => <><button onClick={handleClick}>{text}</button></>

const App = () => {

  // const [ counter, setCounter ] = useState(0);
  const [ clicks, setClicks ] = useState( { left: 0, right: 0 } )

  const leftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
  // const setToZero = () => setCounter(0)
  const rightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <>
      {/* <Display counter={counter}/> */}
      {clicks.left}
      <Button handleClick={leftClick} text={'left'} />
      {/* <Button handleClick={setToZero} text={'zero'} /> */}
      <Button handleClick={rightClick} text={'right'} />
      {clicks.right}
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

