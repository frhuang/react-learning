import React, { Component, PropTypes } from 'react';

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit =(e) => {
        const text = e.target.value.trim();
        if (text.length !== 0 && e.which === 13) {
            this.props.addItem(text);
            this.setState({ text: '' });
        }

    }

    render() {
        return (
            <input type="text"
                   autoFocus="true"
                   value={this.state.text}
                   onChange={this.handleChange.bind(this)}
                   onKeyDown={this.handleSubmit.bind(this)} />
        )
    }
}

CommentForm.propTypes = {
    addItem: PropTypes.func.isRequired
}