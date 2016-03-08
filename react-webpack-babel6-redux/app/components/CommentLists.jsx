import React, { Component, PropTypes } from 'react';

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

CommentLists.propTypes = {
    items: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired
}