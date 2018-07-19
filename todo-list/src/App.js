import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate'

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<div>이렇게 말이죠.</div>}>
        <div>여기엔 children 자리구요.</div>
      </TodoListTemplate>
    );
  }
}

export default App;
