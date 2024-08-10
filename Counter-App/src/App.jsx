import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)
   // same work is done with this method
  //let counter = 5


  const addvalue = () => {
    console.log("Clicked", counter)
    //counter += 1
    setCounter(counter +1 )
  }
  const removeValue = () => {
    if(counter >= 1){
      setCounter(counter - 1 )
    }
    
  }
  return (
    <>
      <h1>Hello! This is React</h1>
      <h2>counter value: {counter} </h2>
      <button
        style={{backgroundColor:'pink', marginBottom:10 , borderRadius:100}}
        onClick={addvalue}
      >Add value {counter}</button> <br />
      <button
       style={{backgroundColor:'olive', color: 'white', paddingInline:6, borderRadius:100}}
      onClick = {removeValue}
      >Remove value {counter} </button>
    </>
  )
}

export default App
