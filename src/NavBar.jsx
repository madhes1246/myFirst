import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/parent">Parent</Link>
                <div>home</div>
                <div>Abour</div>
                <div>contact</div>
            </React.Fragment>
        );
    }
}

export default NavBar;