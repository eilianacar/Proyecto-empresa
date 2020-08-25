import React, { Component } from 'react';
import './MemorizeBoard.css';
import MemorizeCard from './MemorizeCard';
import { buildDeck } from "./buildDeck.jsx";
import Counter from './Counter.jsx';

class MemorizeBoard extends Component {
  render() {
      const shownCards = this.props.deck.map((card, index) => {
        const beingCompared = this.props.selectedPair.indexOf(card) > -1;
        return <MemorizeCard  
        key={index} 
        src={this.props.deck[index]} 
        beingCompared={beingCompared}
        selectCard={() => this.props.selectCard(card)}
        wasMatched={card.wasMatched} 
        />;
      });
    return (
      <main>
        <article>
          <section className="cards-wrapper">
          {shownCards}
          </section>
        </article>
      </main>
    );
  }
}

export default MemorizeBoard;