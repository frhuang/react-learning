import React, { Component } from 'react';

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleTextChange(e){
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e){
        const text = e.target.value.trim();
        if (text.length !== 0 && e.which === 13) {
            this.props.addItem({text: text});
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <input type="text"
                   value={this.state.text}
                   onChange={this.handleTextChange.bind(this)}
                   onKeyDown={this.handleSubmit.bind(this)} />

        )
    }
}