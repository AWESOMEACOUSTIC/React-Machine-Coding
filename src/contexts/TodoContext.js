import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        
    ],
    addTodo : (message) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}
});

export default function useTodo(){
    return useContext(TodoContext);
}

export const TodoContextProvide = TodoContext.Provider;