import React, { Component } from "react";
import CardList from "./CardList";
import robotList from "./robots";

class App extends Component {
  render() {
    return (
      <div id="App">
        <CardList robots={robotList} />
      </div>
    );
  }
}

export default App;
