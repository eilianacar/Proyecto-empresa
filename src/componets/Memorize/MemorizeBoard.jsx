import React, { Component } from 'react';
import './MemorizeBoard.css';
import MemorizeCard from './MemorizeCard';
import { buildDeck } from "./buildDeck.jsx";


class MemorizeBoard extends Component {
  state = {
    deck: buildDeck(),
    selectedPair: [],
    isBeingCompared: false
  } 

  render() {
      const shownCards = this.state.deck.map((card, index) => {
        return <MemorizeCard src={this.state.deck[index]}/>;
      });
    
        
    return (
      <main class="memorize-container ">
        <div className="board">{shownCards}</div>
      </main>
    );
  }
}

export default MemorizeBoard;