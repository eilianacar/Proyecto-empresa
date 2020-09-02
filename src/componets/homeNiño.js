//Pantalla principal con todo el contenido, modulos, ranking y juegos
import React from 'react';
import '../styles/HomeChild.css';
/* import video from '../assests/HootieHoo_GAV_M1_A1.mp4';
import videoDos from '../assests/HootieHoo_GAV_M1_C2_Anim_v3.mp4'; */
import puma from '../assests/GAV_Personaje12.png';
import coronavirus from '../assests/GAV_Personaje07.png';
import trivia from '../assests/trivia.png';
import puzzle from '../assests/puzzle.png';
import memorize from '../assests/memorize.png';
import equipo from '../assests/HH_GAV_PumaEspumaYElEscuadronPrevencion.png';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ColorsContext from './context/ColorsContext';


const Home = () => {

  return (
    <ColorsContext.Consumer>
      {context => {
        return(
          <main className='homeChild'>
            <article className={
              context.visionProblemsMode === true ? "box-video visionProblemsGrey" : "box-video lightPink"}>
              <div className='header-box'>
                <img src={coronavirus} alt='header' width="10%" height="30%" />
                <h1 className={context.visionProblemsMode === true ? "title-box visionProblemsBlack" : "title-box orange"}>Videos</h1>
                <img src={puma} alt='puma' width="10%" height="30%" />
              </div>
              <h1 className={context.visionProblemsMode === true ? "title-cap visionProblemsWhiteFont" : "title-cap shinyPink"}>Cap1. La Conora es nuestra.</h1>
              <ReactPlayer className='videoHome' width={500}
                height={300} url="https://www.youtube.com/watch?v=G2BHb6kWnRc" controls={true} />
              <h1 className={context.visionProblemsMode === true ? "title-cap visionProblemsWhiteFont" : "title-cap shinyPink"}>Cap2. Una gran aventura en un mundo muy pequeño.</h1>
              <ReactPlayer className='videoHome' width={500}
                height={300} url="https://www.youtube.com/watch?v=tuILs6Zedco" controls={true} />
            </article>
            <article className={context.visionProblemsMode === true ? "box-game visionProblemsGrey" : "box-game lightPink"}>
              <h1 className={context.visionProblemsMode === true ? "title-boxTwo visionProblemsBlack" : "title-boxTwo orange"}>¡Aprende jugando!</h1>
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
              </div>
            </article>
        </main>
        )
      }}
    </ColorsContext.Consumer>
    
  );
}

export default Home;