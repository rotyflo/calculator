import Output from '../components/Output';
import React from 'react';
import Buttons from './Buttons';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Output output={this.props.output} />
        <Buttons />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    output: state.output
  }
}

export default connect(mapStateToProps)(App);
