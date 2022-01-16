import React from 'react'

export const TodoItem = ({ todo, index, handleDelete, handleToggle }) => {

    // console.log("todo item")
    return (

        <li
            className="list-group-item"
            key={todo.id}
        >

            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id)}
            >
                {index + 1}. {todo.desc}
            </p>

            <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}
