import React, { Component } from 'react';
import '../styles/styles.css'

class SideBar extends Component {
    state = {}
    render() {
        console.log(this.props.about)
        return (
            <div className="sidebar">
                <a href className="menu">About</a>
                <a href className="menu">Projects</a>
                <a href className="menu">Contact</a>
            </div>
        );
    }
}

export default SideBar;