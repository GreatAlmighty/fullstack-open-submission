import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => { 

  const name = 'John Doe';
  const age = 18;

 console.log("Program is running");

  return(
    <>
      <h1>Greetings!</h1>
      <Hello name="Dorjay" age={28} />
      <Hello name="Kewal" age={28 + 1} />
      <Hello name="Anshul" age={age + 12} />
      <Hello name={name} age={age} />
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
