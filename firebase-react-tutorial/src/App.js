import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
class App extends Component {

  constructor() {
    super()
    this.state = {
      speed: 20
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
        <p> made by junghun </p>
      </div>
    );
  }
}

export default App;