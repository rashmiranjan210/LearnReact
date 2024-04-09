import { useState } from 'react'
import './App.css'

function App() {
  const [form, setform] = useState({email:"",phone:""})

  const func=(e)=>{
      setform({...form,[e.target.name]:e.target.value})
    }
  const hi=()=>{
    console.log("hi")
  }
  return (
    <>
      <input type='text' name='email' value={form.email} onChange={func}></input>
      <input type='text' name='phone' value={form.phone} onChange={func} onMouseOver={hi}></input>
    </>
  )
}

export default App
