import React, { Component } from 'react';
import { buildDeck } from './buildDeck';
import MemorizeBoard from './MemorizeBoard.jsx';

class MemorizeEntryPoint extends Component {
  state = {
    deck: buildDeck(),
    selectedPair: [],
    isComparing: false,
  };

  comparePair = (pair) => {
    this.setState({
      isComparing: true
    });
    setTimeout(() => {
      const [cardOne, cardTwo] = pair;
      let deck = this.state.deck;

      if (cardOne.img === cardTwo.img) {
        deck = deck.map((card) => {
          if (card.img !== cardOne.img) {
            return card;
          }

          return {...card, wasMatched: true};
        })
      }
      this.setState({
        selectedPair: [],
        deck,
        isComparing: false
      })
    }, 1000)
  }

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

    if (selectedPair.length === 2) {
      this.comparePair(selectedPair);
    }
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