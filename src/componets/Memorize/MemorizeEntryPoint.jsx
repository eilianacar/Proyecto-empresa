import React, { Component } from 'react';
import { buildDeck } from './buildDeck';
import MemorizeBoard from './MemorizeBoard.jsx';

class MemorizeEntryPoint extends Component {
  state = {
    deck: buildDeck(),
    selectedPair: [],
    isComparing: false,
  };

  

  selectCard = (card) => {
    if (
      this.state.isComparing ||
      this.state.selectedPair.indexOf(card) > -1 ||
      card.matched
    ) {
      return;
    }
    const selectedPair = [...this.state.selectedPair, card];
    this.setState({
      selectedPair,
    });
  };

  render() {
    return (
      <div>
        <MemorizeBoard deck={this.state.deck} selectedPair={this.state.selectedPair} selectCard={(card) => this.selectCard(card)}/>
      </div>
    )
  }
}

export default MemorizeEntryPoint;