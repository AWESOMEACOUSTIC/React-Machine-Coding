import { React, useState } from "react";
import useTodo from "../contexts/TodoContext";

function TodoInput() {
   
    const [inputValue, setInputValue] = useState("");
    const { addTodo } = useTodo();

     const addTask = (e) => {
        e.preventDefault();

        if( inputValue.trim() === "") return;
        addTodo(inputValue);
        setInputValue("");
    }

    return (
        <form
            onSubmit={addTask}
            className='flex'>
            <input
                type="text"
                value={ inputValue }
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Add a new task'
                className='w-full text-white/50 px-4 border-black/10 outline-none rounded-l-lg border duration-150 bg-white/15 py-2.5'
            />
            <button type='submit'
                className='px-4 py-1.5 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 duration-150'>
                Add
            </button>

        </form>
    )
}

export default TodoInput