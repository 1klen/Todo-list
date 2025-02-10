import { useState } from "react";

function EditToDoForm({ editTodo, task }) {    // левая функция и task
    const [value, setValue] = useState(task.task);

    function handleChange(event) {
        setValue(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        editTodo(value, task.id); // вообще левая функция, он сам ее придумал. Это не та, что была
        setValue("");
    }

    return (
        <form className="toDoForm" onSubmit={handleSubmit}> 
            <input value={value} type="text" className="todo-input" placeholder="What is the update?" onChange={handleChange}/>
            <button type="submit" className="todo-btn">Add Update</button>
        </form>
    )
}

export default EditToDoForm;