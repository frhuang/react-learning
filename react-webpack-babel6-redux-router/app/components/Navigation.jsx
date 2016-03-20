import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class Navigation extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="home">Home</Link>
                    <Link to="about">About</Link>
                </nav>
            </header>
        )
    }
}