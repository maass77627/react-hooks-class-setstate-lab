import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
      items: itemData,
    };
    this.handleDarkModeClick = this.handleDarkModeClick.bind(this);
  }

  handleDarkModeClick() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    return (
      <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {this.state.isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}

export default App;
