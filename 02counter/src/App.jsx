import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  // let counter=15
  const addValue=()=>{
    // counter=counter+1
    // if(counter<=20){
    //   setCounter(counter)

    // 15 to 19
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    }
  }

  const removeValue=()=>{
    counter=counter-1
    if(counter>=0){
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}>Remove value {counter}</button>
    </>
  )

export default App
