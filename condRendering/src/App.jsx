import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "Buy groceries",
      desc: "Go to the store and buy food for tomorrow"
    },
    {
      title: "Study React",
      desc:"Read through the documentation of React and start building something."
    },
    {
      title: "Take a break",
      desc: "Give your body some rest and relax."
    }
  ])

  const Todo = ({ todo }) => {
    return (
      <div>
        <div>{todo.title}</div>
        <div>{todo.desc}</div>
      </div>
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
      <div className="card">
       {/*showbtn?<button>This will show when 2nd button is clicked</button>:"Kuchni"*/} <br/>
       {showbtn && <button>This will show when 2nd button is clicked</button>} 
        <button onClick={() => setshowbtn(!showbtn)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
