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
            (todo) => (
                <TodoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    color={todo.color}
                    key={todo.id}
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