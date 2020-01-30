import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        //e.target.name is used because as long as the name of the target matches whatever the title on the form field is, this will work. So we don't need to create one of these for each input.
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        //Prevents the form from refreshing.
        e.preventDefault();
        //You need to pass the title up to App.js
        this.props.addTodo(this.state.title);
        //What is setState?
        this.setState({title: ''});
    }

    //In order for a value to change on an input field, you need an onChange event, and a function to reference it, as seen here.
    render() {
        return (
            <form style={{display:"flex"}} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add Todo..." style={{flex:'10', padding:"5px"}} value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="Submit" className="btn" style={{flex:'1'}}/>
            </form>
        )
    }
}

//Proptypes go outside the class
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
