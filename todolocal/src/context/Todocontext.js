import { createContext, useContext } from "react";

export const Todocontext =createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    addTodo:(todo) => {},
    updatedTodo:(id, todo)=> {},
    deletedtodo: (id)=> {},
    tgglecomplete: (id) =>{}
})

export const useTodo= ()=>{
    return useContext(Todocontext)
}

export const Todoprovider =Todocontext.Provider