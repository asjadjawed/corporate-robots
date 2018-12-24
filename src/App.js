import React, { Component } from "react";
import "./App.css";
// import Logo from "./Robot.svg";
import CardList from "./CardList";
import Scroll from "./Scroll";
import robotList from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    this.setState({ robots: robotList });
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div id="App">
        <header>
          <h1>Robo Inc. Team</h1>
          <p>
            <em>Only the best corporate robots</em>
          </p>
          <SearchBox onSearchChange={this.onSearchChange} />
        </header>
        <main>
          <Scroll>
            <CardList
              robots={this.state.robots.filter(robot =>
                robot.name
                  .toLowerCase()
                  .includes(this.state.searchField.toLowerCase())
              )}
            />
          </Scroll>
        </main>
      </div>
    );
  }
}

export default App;
