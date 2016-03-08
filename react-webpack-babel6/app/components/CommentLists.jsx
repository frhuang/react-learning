import React, { Component } from 'react';

export default class CommentLists extends Component {
    render() {
        const items = this.props.items;
        return (
            <ul>
                {items.map((e) =>
                        <li key={e.id} id={e.id}>
                            <span>{e.text}</span>
                            <button onClick={this.props.deleteItem.bind(null, e.id)}>x</button>
                        </li>
                )}
            </ul>
        )
    }
}