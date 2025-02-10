function ToDo({ task, togleComplete, deleteTodo, editTodo }) {
    return (
        <div className="Todo">
            <p onClick={() => togleComplete(task.id)} className={`${ task.completed ? 'completed' : "" }`} >{task.task}</p>
            <button className="todo-btn" onClick={() => deleteTodo(task.id)} >delete</button>
            <button className="todo-btn" onClick={() => editTodo(task.id)} >edit</button>
        </div>
    )
}

export default ToDo;



