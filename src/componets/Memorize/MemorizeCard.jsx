import React, { Component, Fragment } from 'react';
import './MemorizeBoard.css';
import FrontImg from "../../assests/Ícono_01.png";
import { createRef } from 'react';
import FlipCard from 'react-card-flip';

class MemorizeCard extends Component {
  state = {
    isFlipped: false,
    flipped: []
  }

  render() {
    return (
        <div className="card" onClick={this.props.selectCard}>
          <FlipCard isFlipped={this.props.beingCompared || this.props.wasMatched}>
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