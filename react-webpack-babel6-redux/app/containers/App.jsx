import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import CommentLists from '../components/CommentLists';
import * as ItemActions from '../actions';

class App extends Component {
    render() {
        const { items, actions } = this.props;
        return (
            <div>
                <h2>发表心情</h2>
                <CommentForm addItem={actions.addItem} />
                <CommentLists items={items} deleteItem={actions.deleteItem}/>
            </div>
        )
    }
}

App.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}


export default connect(
    state => ({
        items: state.items
    }),
    dispatch => ({
        actions: bindActionCreators(ItemActions, dispatch)
    })
)(App)