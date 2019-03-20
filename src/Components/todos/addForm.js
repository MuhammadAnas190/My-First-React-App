import React, {Component} from 'react'

class AddForm extends Component {
    state = {
        content: ""
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
            this.props.addTodo (this.state);
            this.setState({
                content: ""
            })
    };

    render (){
        return (
            <div id="AddForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Add_todo">Add a List</label>
                    <input type="text" id="Add_todo" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}
export default AddForm