import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; //react-router should be below React import
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import uuid from 'uuid';
//This is Axios
import axios from 'axios';

class App extends React.Component {

  //These need to go here because these todo's need to be fed into other components.
  /*state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
    ]
  }*/

  state = {
    todos: []
  }
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => this.setState({ todos: res.data }))
  }

  //Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  //Delete Todo Is THIS a prop!?!?
  delTodo = (id) => {
    //What this does essentially is copy everything that is currently there "..." is the spread operator, .filter returns any todo where the ID is not the one passed here.
    //this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) //Using backslash quotes for this.
      .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  //Is THIS a prop?!?
  addTodo = (title) => {
    /*const newTodo = {
      id: uuid.v4(),
      title, //take the title
      completed: false
    }*/
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));
    //this.setState({todos: [...this.state.todos, newTodo]});
  }

  //All tags must be within' the <div> tag apparently.
  render(){
    //console.log(this.state.todos.id)
    //exact keyword will only render the Route if it is exactly that path
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
