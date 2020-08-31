//Pantalla principal que dice empecemos
import React from 'react';
import '../styles/Cover.css'
import Video from '../assests/HH_GanemosleAlVirus_Trailer.mp4'
import { Link } from "react-router-dom";
import ColorsContext from './context/ColorsContext.jsx';

const Cover = (props) => {
  return (
    <ColorsContext.Consumer>
      {context => {
        return (
          <div className='containerCover'>
            <main className='main'>
              <div className='header-text'>
                <h1 className={context.visionProblemsMode === true ? "title visionProblemsBlackFont" : "title darkPurpleFont"}>¡Bienvenidos!</h1>
                <br></br>
                <h1 className={context.visionProblemsMode === true ? "title visionProblemsBlackFont" : "title darkPurpleFont"}>Conoce más informacion sobre como prevenir<br></br> el COVID-19 y como enfrentarlo</h1>
                <Link to="/ent">
                  <button className={context.visionProblemsMode === true ? "inicialButton visionProblemsBlack" : "inicialButton darkPurple"}>¡Empecemos!</button>
                </Link>
              </div>
              <video className='video' src={Video} width="750" height="500" controls>
              </video>
            </main>
          </div>
        )
      }}
    </ColorsContext.Consumer>
    
  );
}

export default Cover;