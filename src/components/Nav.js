import React, { Component } from 'react';

//NavBar component with the prop title

class Navigation extends Component {
    render(){
        return (
            <div className="Nav">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="#">
                        { this.props.title }
                    </a>
                </nav>
            </div>
        );
    }
}

export default Navigation;