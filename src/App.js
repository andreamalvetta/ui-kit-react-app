import React, { Component } from 'react';
import { Component1, Component2, Component3 } from 'ui-kit-test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Component1>Component 1</Component1>
        <Component2>Component 2</Component2>
        <Component3>Component 3</Component3>
      </div>
    );
  }
}

export default App;
