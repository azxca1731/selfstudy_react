import React, { Component } from 'react';
import firebase from 'firebase';
class App extends Component {

  constructor() {
    super()
    this.state = {
      speed: 10
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })
  }

  render() {
    const { speed } = this.state;
    return (
      <div>
        <p> Hello Firebase!</p>
        <p> {speed} </p>
      </div>
    );
  }
}

export default App;