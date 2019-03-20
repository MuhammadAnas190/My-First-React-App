import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const TodoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <p onClick={() => {deleteTodo(todo.id)}}>{todo.content}</p>
                </div>
            )

        })
    ) : (
        <p className="center">No todos's left</p>
    );

    return (
        <div className="todos collection">
            {TodoList}
        </div>
    )
};

export default Todos