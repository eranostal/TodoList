import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //*The reason for this is because it's good practice to declare your PropTypes

class Todos extends React.Component {

    //NOTE: The functions for markComplete and delTodo will be in the uppermost part of React (I.E the App.js file), you're simply passing the values along here.
    //LEARN REDUX

    render(){
        //Takes the todo's props and tells you what to display in them. In this case, you're displaying the title.
        //map is a method that returns an array from an array. We're taking the props values and using JSX to write them out.
        //You're passing the todo opbject in this case (in parenthesis)
        //This creates a list and you should give them keys.
        return this.props.todos.map((todo) => (
            //Passing a todo item to the TodoItem.js file.
            //The unique key is the Todo's ID.
            //You need to pass the two events in this case for markComplete and delTodo to this Todos.js file, and then to App.js. Why do you need to include .props in these two but not in App.js?
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));

    }
}

//*PropTypes declaration here
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    telTodo: PropTypes.func.isRequired
}

export default Todos;
