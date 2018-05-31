import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { randomPosition } from "./HOC";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Head = props => {
  return (
    <img
      style={props.position}
      //onClick={this.jump}
      onMouseOver={props.flip}
      src="../public/download.png"
    />
  );
};

const ExtendedHead = randomPosition(Head);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  resetCount() {
    this.setState({
      count: 0
    });
  }

  render() {
    const childrens = [];

    for (let i = 0; i < this.state.count; i++) {
      childrens.push(<ExtendedHead key={i} />);
    }
    return (
      <div className="container">
        {childrens}
        <button onClick={this.incrementCount}>{this.state.count}</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
