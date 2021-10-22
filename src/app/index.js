import './index.css';
import process from './functions/process';
import Output from './components/Output';
import React from 'react';
import Buttons from './components/Buttons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0"
    }
  }

  handleClick = (key) => {
    let newOutput = process(key, this.state.output);
    this.setState({
      output: newOutput
    });
  }

  render() {
    return (
      <div class="calculator">
        <Output output={this.state.output} />
        <Buttons process={this.handleClick} />
      </div>
    );
  }
}