import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>this is about pages</h1>
                <hr />
                <Link to='home'>back to home</Link>
            </div>
        )
    }
}