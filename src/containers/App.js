import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import robotList from "../robots";
import SearchBox from "../components/SearchBox";
import Modal from "../components/Modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
      modalState: "off",
      selectedRobot: {
        id: "",
        name: "",
        title: "",
        activity: "",
        department: "",
        jobDescription: ""
      }
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.setState({ robots: robotList });
  }

  onSearchChange(e) {
    this.setState({ searchField: e.target.value });
  }

  showModal(e) {
    e.stopPropagation();
    let selection =
      e.target.id !== "" ? e.target.id : e.target.parentElement.id;
    this.setState({
      modalState: "on",
      selectedRobot: this.state.robots[selection]
    });
  }

  hideModal(e) {
    e.stopPropagation();
    this.setState({ modalState: "off" });
  }

  render() {
    return (
      <div id="App">
        <header>
          <h1>Robo Inc. Team</h1>
          <p>
            <em>&ldquo;Only the best corporate robots!&rdquo;</em>
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
              showModal={this.showModal}
            />
          </Scroll>
        </main>
        <Modal
          modalState={this.state.modalState}
          selectedRobot={this.state.selectedRobot}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default App;
