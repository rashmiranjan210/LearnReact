import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [todo, settodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handeladd = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    settodo("");
    console.log(todos);
  };
  const handeledit = () => {};

  const handeldelete = () => {};

  const handelevent = (e) => {
    e.preventDefault();
    settodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded -xl bg-violet-50 p-5 min-h-[80vh]">
        <h2 className="text-xl font-bold">TodoList</h2>
        <input
          type="text"
          onChange={handelevent}
          value={todo}
          id="completed"
          className="w-1/2"
        />
        <button onClick={handeladd} className="button ml-5 bg-slate-400 px-5 rounded-md">
          add
        </button>
        <div className="todos">
          <h2 className="font-bold text-xl">Your Todo</h2>
          {todos.map((item, index) => {
            return (
              <div key={index} className="todos flex justify-between w-100">
                <div className="text">{item.todo}</div>
                <input type="checkbox" checked={item.isCompleted} />
                <button
                  onClick={handeledit}
                  className="bg-violet-400 px-4 rounded-md my-3"
                >
                  edit
                </button>
                <button
                  onClick={handeldelete}
                  className="bg-violet-400 px-4 rounded-md my-3"
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;