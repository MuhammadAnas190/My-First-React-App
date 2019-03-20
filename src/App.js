import React, { Component } from 'react';
import Todos from './Components/todos/Todos'
import AddForm from './Components/todos/addForm'

class App extends Component {
    state = {
        todos: [
            {id: 1, content: "Buy a burger"},
            {id: 2, content: "Study"}
        ]
    };
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState ({
                 todos
        })
    };

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos: todos
        })
    };
  render(){
    return (
        /*
        * Todo: Add UI Component in the App.js file & add filter method to delete
        *
         */
      <div className="todoApp container">
          <h1 className="center blue-text">
              My Todo's list
          </h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
