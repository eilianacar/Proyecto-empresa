import React, { Component } from 'react';
import { buildDeck } from './buildDeck';
import MemorizeBoard from './MemorizeBoard.jsx';
import './MemorizeBoard.css';
import Counter from './Counter.jsx';

class MemorizeEntryPoint extends Component {
  state = {
    deck: buildDeck(),
    selectedPair: [],
    isComparing: false,
    triesNumber: 0,
    winnerMessage: ''
  };

  resetGame = () => {
    this.setState({
      deck: buildDeck(),
      selectedPair: [],
      isComparing: false,
      triesNumber: 0
    });
  }
  checkForWinner = (deck) => {
    if (deck.filter(card => !card.wasMatched).length === 0) {
     /*  alert(`Ganaste en ${this.state.triesNumber} intentos`); */
     this.setState({
       winnerMessage: `Ganaste en ${this.state.triesNumber} intentos`
     })
    }
  }

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
      } else {
        this.setState({
          triesNumber: this.state.triesNumber + 1
        })
      }
      this.checkForWinner(deck);
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
      <div className="board">
        <Counter
          triesNumber={this.state.triesNumber}
          resetGame={() => this.resetGame()}
        />
        <button className="memorize-reset-btn" onClick={this.resetGame}>Reinicar juego</button>
        <p>{this.state.winnerMessage}</p>
        <MemorizeBoard
          deck={this.state.deck}
          selectedPair={this.state.selectedPair}
          selectCard={(card) => this.selectCard(card)}
          triesNumber={this.state.triesNumber}
        />
      </div>
    );
  }
}

export default MemorizeEntryPoint;