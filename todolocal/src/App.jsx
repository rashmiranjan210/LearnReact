import { useState,useEffect } from 'react'
import './App.css'
import { Todoprovider } from './context/index'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, settodos] = useState([])

    const addTodo=(todo)=>{
      settodos((prev)=>[...prev,{id:Date.now(),...todo}])

    }
    const updatedTodo = (id, todo) => {
      settodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)));
    };

    const deletedtodo =(id) =>{
      settodos((prev)=>prev.filter((prevtod)=>prevtod.id!==id))
    };

    const tgglecomplete=(id)=>{
      settodos((prev)=>prev.map((prevtod)=>prevtod===id?{...prevtod,completed:!prevtod.completed}:prevtod))
    }

    useEffect(() => {
      const todos=JSON.parse(localStorage.getItem("todos"));

      if(todos && todos.length>0){
        settodos(todos)
      }

    }, [])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))

    }, [todos])
    

  return (
    <Todoprovider value={{todos,addTodo,updatedTodo,deletedtodo,tgglecomplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo)=>{
                  <div key={todo.id} className='w-full' >
                    <TodoItem/>
                  </div>
                })}
            </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
