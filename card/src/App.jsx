import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { useEffect } from 'react'

function App() {

  const [card, setcard] = useState([])
  const fetchData = async ()=>{
    let a= await fetch("https://jsonplaceholder.typicode.com/posts");
    let Data=await a.json()
    setcard(Data)
    console.log(Data)

  }
  useEffect(() => {
   fetchData()
  }, [])
  
  return (
    <>
      <Navbar />
      <div>
        {card.map((card)=>{
          return <div className='card' key={card.id} >
            <h1>{card.id}</h1>
            <p>{card.title}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App
