import React, { Component, Fragment } from 'react';
import './MemorizeBoard.css';
import FrontImg from "../../assests/Icono_Demo_3.png";
import { createRef } from 'react';
import FlipCard from 'react-flipcard-2';

class MemorizeCard extends Component {
  state = {
    isFlipped: false,
    flipped: []
  }

  flipHandler = () => {
    this.setState({
      isFlipped: true,
      flipped: []
    });
  };

  componentDidUpdate() {
    console.log("Tarjeta dada vuelta", this.state);
  }
  render() {
      if (this.state.isFlipped === true) {

      }
    return (
        <div className="card">
          <FlipCard>
            <div className="front card">
              <div className="image-container">
                <img src={FrontImg} alt="" />
              </div>
            </div>
            <div className="back card">
              <div className="image-container">
                <img src={this.props.src.img} alt="" />
              </div>
            </div>
          </FlipCard>
        </div>
    );
  }
}

export default MemorizeCard;