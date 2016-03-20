import React, { Component, PropTypes } from 'react';
import Navigation from '../components/Navigation';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navigation />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;