import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const people= [
  'John Sena',
  'Alice Smith',
  'Bob Johnson',
  'Ajay Kumar',
  'Sachin Tendulkar',
  'Virat Kohli',
  'M.S. Dhoni',
  'Rohit Sharma',
  'Anil Kumble'
];
const num1= [1,2,3,4];
const num2= [5,6,7,8];
    const added = [...num1, ...num2];
    const props = {name: 'Vraj', purpose: 'Interview'};

function App() {
  // let counter = 15;
  //counter hooks will act as global variable for the entire component and it will be updated on every render
  const [counter, setCounter] = useState(15);
  const addValue= () =>{
    console.log("clicked", counter);
   setCounter(counter + 1);
  }

  const removeValue = () =>{
    if(counter>0){
      setCounter(counter - 1);
    }
    else {
      setCounter(0);
    }
  }
  return (
      <Fragment>
    <div className="App">
      <Header name="Sutwane Vraj Shweta" purpose="to learn functional components"/>
      <Header {...props} />
      <h2 style={{ color: 'red', border: '1px solid green' }}>Hello React March 2026,12th</h2>
    <ul>
      {people.map((p)=><li>{p}</li>)}
    </ul>
    <p>{added }</p> <hr/>
   <h2>Chai aur React Tutorial 2026</h2>
   <h2>Counter value: {counter} </h2>

   <button onClick={addValue}>Add value</button><br/>
   <button onClick={removeValue}>Remove value</button>

   <footer>Footer value: {counter}</footer>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </Fragment>
  );
}

export default App;
