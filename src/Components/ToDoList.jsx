import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    function togleComplete(id) {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed} : todo)
        )
    }
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function editTodo(id) {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing} : todo)
        )
    }
    function editTask(task, id) {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task: task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className="TodoList">
            <ToDoForm addTodo={addTodo}/>
            
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditToDoForm  editTodo={editTask} task={todo}/>
                    ) :
                    <ToDo 
                        task={todo} 
                        key={index} 
                        togleComplete={togleComplete} 
                        deleteTodo={deleteTodo}  
                        editTodo={editTodo} />
            ))}
        </div>
    )
}

export default ToDoList;

