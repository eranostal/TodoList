import React from 'react';
import {Link} from 'react-router-dom';
//This Header.js just returns some rendered stuff.
//You can't use <a> in React
function Header(){
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

//You can just use classes instead of this.
const headerStyle = {
    background: '#333',
    color: '#FFF',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#FFF',
    textDecoration: "none"
}

export default Header;