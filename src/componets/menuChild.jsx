//Para el registro del usuarios al hacer click en jugar
import React from 'react';
import '../styles/menuChild.css'
import ColorsContext from './context/ColorsContext.jsx';
import { Link } from "react-router-dom";
import Stars from '../assests/Group 7.png'
import PumaMenu from '../assests/GAV_Personaje03.png'

const menuChild = (props) => {
  return (
    <ColorsContext.Consumer>
      {context => {
        return (
          <div className='containerMenu'>
            <main className='main'>
              <div className='stars-text'>
                <img className="imgPuma" src={PumaMenu} alt="pumita" width="20%" />
                <div>
                  <img className="imgStars" src={Stars} alt="estrellas" width="97%" />
                  <h1 className={context.visionProblemsMode === true ? "titleMenu visionProblemsBlackFont" : "titleMenu darkPurpleFont"}>¡Gana estrellas respondiendo correctamente y ganale al covid!</h1>
                  <div className='button-menu'>
                    <Link to="/homeNiño">
                      <button className={context.visionProblemsMode === true ? "menu-videos visionProblemsBlack" : "menu-videos darkPurple"}>Videos</button>
                    </Link>
                    <Link to="/game">
                      <button className={context.visionProblemsMode === true ? "menu-game visionProblemsBlack" : "menu-game darkPurple"}>Juegos</button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )
      }}
    </ColorsContext.Consumer>

  );
}

export default menuChild;