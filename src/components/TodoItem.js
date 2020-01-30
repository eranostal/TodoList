import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
   

    //Methods should go above the render statement
    //Arrow functions should be used instead of regular function calls.
    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            borderBottom: '1px dotted #CCC',
            //textDecoration has a ternary operator, and if it is true, then you'll get line-through, otherwise you'll get none.
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }


    //Why does getStyle need () and markComplete doesn't?    
    render() {
        //This const call grabs the props in the todo item we have, so you don't have to write this.props.todo.WHATEVER on everything.
        const {id, title} = this.props.todo;
        return (
            //Inline styles need double curly braces and styles with dashes are camelCase. It apparently doesn't like semicolons either.
            //However, if you're using a variable, you only need one set of curly braces.
            //You can also set this to functions
            //You're passing the ID up
            //{' '} is an empty space
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

//This is an object instead because it's an individual Todo, unlike the array of objects in Todos.js
//It's good to declare your prop types.
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#FF0000',
    color: '#FFF',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
