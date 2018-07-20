import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        //이럴때 virtualdom 안하게 함
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({ id, text, checked, color }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    color={color}
                    key={id}
                />
            )
        );
        return (
            <div>
                {console.log("TodoItemList render")}
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;