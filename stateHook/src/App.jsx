import { useState,useEffect,useRef } from 'react'
import './App.css'
import Navabar from './components/Navabar'

function App() {
  const [count, setCount] = useState(10)
  const btnref=useRef()
  useEffect(() => {
    console.log(`first render`) 
    btnref.current.style.backgroundColor="red"
  },);

 
  

  return (
    <>
    /
     <div>the count is {count}</div>
     <button ref={btnref} onClick={()=>setCount(count+1)}>uh</button>
     <button onClick={()=>btnref.current.style.display="none"}>off</button>
    </>
  )
}

export default App
