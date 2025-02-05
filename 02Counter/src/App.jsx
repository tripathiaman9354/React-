import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter,setCounter]=useState(15)
  // let Counter=51
  const addValue=()=>{ 
    // console.log("Value Added",Math.random()); 
    if(Counter<20){
    // Counter=Counter+1
    setCounter(Counter=>Counter+1)
    setCounter(Counter=>Counter+1)
    setCounter(Counter=>Counter+1)
    setCounter(Counter=>Counter+1)}
    // console.log("Clicked",Counter);
  }

  const removeValue=()=>{
    if(Counter>0)
    {
      setCounter(Counter-1)
    }
  }

    return (
    <>
      <h1>Aman aur React</h1>
      <h2>Counter value: {Counter}</h2>

      <button onClick={addValue}>Add Value {Counter}
      </button>
      <br/>
      <button onClick={removeValue}>Remove value {Counter}</button>  
    </> 
  )
}

export default App
