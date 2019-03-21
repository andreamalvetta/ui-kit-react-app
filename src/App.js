import React, { Component } from 'react';
import { Button, Component2, Component3 } from 'ui-kit-test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Click me</Button>
        <Component2>Component 2</Component2>
        <Component3>Component 3</Component3>
      </div>
    );
  }
}

export default App;
