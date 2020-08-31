// Selección de niño o adulto
import React from 'react';
import '../styles/Cover.css'
import { Link } from "react-router-dom";
import Puma from '../assests/GAV_Personaje09.png'
import Buho from '../assests/GAV_Personaje21.png'
import ColorsContext from './context/ColorsContext.jsx';

const Ent = (props) => {
  return (
    <ColorsContext.Consumer>
      {context => {
        return (
          <div className="containerCover">
            <main className="mainEnt">
              <h1 className={context.visionProblemsMode === true ? "title visionProblemsBlackFont" : "title darkPurpleFont"}>¡Para comenzar elige tu perfil! </h1>
              <div className="adult-profile">
                <img className="img" src={Buho} alt="buho" width="42%" />
                <Link to="/home">
                  <button className={context.visionProblemsMode === true ? "profileButton visionProblemsBlack" : "profileButton darkPurple"}>Soy Adulto</button>
                </Link>
              </div>
              <div className="child-profile">
                <img className="img" src={Puma} alt="puma" width="42%" />
                <Link to="/homeNiño">
                  <button className={context.visionProblemsMode === true ? "profileButton visionProblemsBlack" : "profileButton darkPurple"}>Soy Niño/a</button>
                </Link>
              </div>
            </main>
          </div>
        );
      }}
    </ColorsContext.Consumer>
  );
}

export default Ent;