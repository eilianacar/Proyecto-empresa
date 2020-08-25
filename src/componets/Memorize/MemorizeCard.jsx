import React, { Component, Fragment } from 'react';
import './MemorizeBoard.css';
import FrontImg from "../../assests/Icono_Demo_3.png";

class MemorizeCard extends Component {
  render() {
  console.log(this.props.src.img);

    return (
      <Fragment>
            <div class="card">
              <div class="card-front">
                <div className="image-container">
                  <img src={FrontImg} alt="" />
                </div>
              </div>
              <div class="card-back">
                <div className="image-container">
                  <img src={this.props.src.img} alt="" />
                </div>
              </div>
            </div>
      </Fragment>
    );
  }
}

export default MemorizeCard;