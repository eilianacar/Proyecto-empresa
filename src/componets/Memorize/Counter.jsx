import React, { Component } from 'react';
import './MemorizeBoard.css';
import ColorsContext from '../context/ColorsContext.jsx';

class Counter extends Component {
  render() {
    return (
      <ColorsContext.Consumer>
        {context => {
          return (
            <div>
              <p className={context.visionProblemsMode === true ? "tries visionProblemsWhiteFont" : "tries visionProblemsBlackFont"}>Intentos: {this.props.triesNumber}</p>
            </div>
          );
        }}
      </ColorsContext.Consumer>
      
    );
  }
}

export default Counter;