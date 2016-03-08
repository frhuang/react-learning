import React, { Component } from 'react';
import CommentForm from '../components/CommentForm.jsx';
import CommentLists from '../components/CommentLists.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    text: '学react好开心'
                }
            ]
        };
    }

    addItem =(e) =>{
        var lists = this.state.items;
        e.id = new Date().getTime();
        var newLists = lists.concat([e]);
        this.setState({items: newLists});
    }

    deleteItem = (e) => {
        var comments = this.state.data;
        var len = comments.length;
        for(let i = 0; i < len; i++) {
            if(comments[i].id === e) {
                comments.splice(i, 1);
                this.setState({data: comments});
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <h1>发表心情</h1>
                <CommentForm addItem={this.addItem.bind(this)} />
                <CommentLists items={this.state.items} deleteItem={this.deleteItem}/>
            </div>
        )
    }
}