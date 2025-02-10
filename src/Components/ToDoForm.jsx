import { useState } from "react";

function ToDoForm({ addTodo }) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <form className="toDoForm" onSubmit={handleSubmit}> 
            <input value={value} type="text" className="todo-input" placeholder="What is the task?" onChange={handleChange}/>
            <button type="submit" className="todo-btn">Add task</button>
        </form>
    )
}

export default ToDoForm;


