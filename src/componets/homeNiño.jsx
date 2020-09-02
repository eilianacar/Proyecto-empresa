//Pantalla principal con todo el contenido, modulos, ranking y juegos
import React from 'react';
import '../styles/HomeChild.css';
import puma from '../assests/GAV_Personaje12.png';
import coronavirus from '../assests/GAV_Personaje07.png';
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
import ColorsContext from './context/ColorsContext.jsx';

const Home = () => {
  return (
    <ColorsContext.Consumer>
      {context => {
        return (
          <main className='homeChild'>
            <article className='box-video'>
              <div className='header-box'>
                <img className='corona' src={coronavirus} alt='header' width="10%" height="30%" />
                <h1 className={context.visionProblemsMode === true ? "title-box visionProblemsBlackFont" : "title-box darkPurpleFont"}>¡Ganemosle al virus! Acompaña a Puma espuma en sus grandes aventuras con el escuadron prevencion</h1>
                <img img className='corona' src={puma} alt='puma' width="10%" height="30%" />
              </div>
              <div className='video-container'>
                <div className={context.visionProblemsMode === true ? "cap-video visionProblemsBlack" : "cap-video lightBlue"}>
                  <h1 className={context.visionProblemsMode === true ? "title-cap visionProblemsBlack" : "title-cap darkPurpleFont"}>Cap1. La Conora es nuestra.</h1>
                  <ReactPlayer className='videoHome' width="90%"
                    height="50vh" url="https://www.youtube.com/watch?v=G2BHb6kWnRc" controls={true} />
                </div>
                <div className={context.visionProblemsMode === true ? "cap-video visionProblemsBlack" : "cap-video lightBlue"}>
                  <h1 className={context.visionProblemsMode === true ? "title-cap visionProblemsBlack" : "title-cap darkPurpleFont"}>Cap2. Una gran aventura en un mundo muy pequeño.</h1>
                  <ReactPlayer className='videoHome' width="90%"
                    height="50vh" url="https://www.youtube.com/watch?v=tuILs6Zedco" controls={true} />
                </div>
              </div>

              <Link to="/game">
                <button className={context.visionProblemsMode === true ? "button-jugar visionProblemsBlack" : "button-jugar darkPurple"}>Jugar</button>
              </Link>
            </article>

          </main>
        )
      }}
    </ColorsContext.Consumer>

  );
}

export default Home;