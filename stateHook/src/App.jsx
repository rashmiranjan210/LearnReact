import { useState,useEffect } from 'react'
import './App.css'
import Navabar from './components/Navabar'

function App() {
  const [count, setCount] = useState(10)
  useEffect(() => {
    alert("hey welcome to my page") 

  }, [])

  useEffect(() => {
    alert("hey count was changed") 
     
  }, [count])
  

  return (
    <>
    <Navabar color={"cyan" + "blue"}/>
     <div>the count is {count}</div>
     <button onClick={()=>setCount(count**2)}>uh</button>
    </>
  )
}

export default App
