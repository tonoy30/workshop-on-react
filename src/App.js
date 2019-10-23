import React from "react";
import "./App.css";
import { Input } from "./components/Forms";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      ans: 0
    };
    this.handleNumber1 = this.handleNumber1.bind(this);
    this.handleNumber2 = this.handleNumber2.bind(this);
  }

  handleNumber1(event) {
    this.setState({
      num1: event.target.value
    });
  }

  handleNumber2(event) {
    this.setState({
      num2: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Input onChange={this.handleNumber1} />
        <Input onChange={this.handleNumber2} />
        <button
          onClick={() => {
            let n1 = parseInt(this.state.num1);
            let n2 = parseInt(this.state.num2);
            this.setState({
              ans: n1 + n2
            });
          }}
        >
          Add
        </button>
        <h5>{this.state.ans}</h5>
      </div>
    );
  }
}

export default App;
