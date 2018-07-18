import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };
    const value = 1;
    return (
      <div>
        <div style={style}>
          hi there
        </div>
        <div>
          {
            (() => {
              if (value === 1) return (<div>하나</div>);
              if (value === 2) return (<div>둘</div>);
              if (value === 3) return (<div>셋</div>);
            })()
          }
        </div>
      </div>
    );
  }
}

export default App;
