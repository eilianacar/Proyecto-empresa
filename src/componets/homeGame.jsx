import React from 'react';
import trivia from '../assests/trivia.png';
import puzzle from '../assests/puzzle.png';
import memorize from '../assests/memorize.png';
import VideosChild from '../assests/videos.png';
import { Link } from 'react-router-dom';
const HomeGame = (props) => {
  return (
    <div>
      <article className='box-game'>
        <h1 className='title-boxTwo'>¡Aprende jugando!</h1>
        <div className='img-container'>
          <Link to='/game/child'>
            <img className='juegos' src={trivia} alt='trivia' width="10%" height="30%" />
          </Link>
          <Link to='/game/puzzle'>
            <img className='juegos' src={puzzle} alt='puzzle' width="10%" height="30%" />
          </Link>
          <Link to='memorize'>
            <img className='juegos' src={memorize} alt='memorize' width="10%" height="30%" />
          </Link>
          <Link to='/homeNiño'>
            <img className='juegos' src={VideosChild} alt='memorize' width="10%" height="30%" />
          </Link>
        </div>
      </article>
    </div>
  );
}

export default HomeGame;