import { useState,useEffect,useRef } from 'react'
import './App.css'
import Navabar from './components/Navabar'

function App() {
  const [count, setCount] = useState(10)
  const a=useRef(0)
  useEffect(() => {
    a.current=a.current+1
    console.log(`hey welcome to my page ${a.current}`) 
  },);

 
  

  return (
    <>
    /
     <div>the count is {count}</div>
     <button onClick={()=>setCount(count+1)}>uh</button>
    </>
  )
}

export default App
