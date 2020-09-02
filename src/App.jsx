//<---------Librerias-------->
import React, { useState, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//<---------CSS-------------->
import './App.css';
//<---------Components------->
import Header from './componets/Header'
import Cover from './componets/Cover';
import Ent from './componets/Ent';
import Game from './componets/game.jsx';
import ChildGame from './componets/gameChild.jsx'
import Home from './componets/home.jsx';
import HomeNiño from './componets/homeNiño.jsx';
import menuChild from './componets/menuChild.jsx';
import Modules from './componets/Modules.jsx';
import Module from './componets/Module.jsx';
import Ranking from './componets/ranking.jsx';
import HomeGame from './componets/homeGame.jsx';
import Memorize from './componets/Memorize/MemorizeEntryPoint.jsx';
import Jigsaw from './componets/puzzle';
import Footer from './componets/Footer'
import ColorsContext from './componets/context/ColorsContext.jsx';
import CuriousFact from './componets/CuriousFact.jsx';


const App = (props) => {
  const [colorsState, setColorsState] = useState({ visionProblemsMode: false });

  const changeColorsHandler = () => {
    let toggleColor;
    colorsState.visionProblemsMode === false ? toggleColor = true : toggleColor = false;
    setColorsState({
      visionProblemsMode: toggleColor
    });
    console.log("visionProblemsMode: true");
  }

  return (
    <Fragment>
      <ColorsContext.Provider value={{
        visionProblemsMode: colorsState.visionProblemsMode,
      }}>
        <Header clicked={changeColorsHandler} />
      </ColorsContext.Provider>
      {/* <button
        className="change-color-btn"
        onClick={() => changeColorsHandler()}
      >
        Tonos oscuros
      </button> */}
      <div className="main-content-wrapper">
        <ColorsContext.Provider
          value={{
            visionProblemsMode: colorsState.visionProblemsMode,
          }}
        >
          <Router>
            <Switch>
              <Route path="/" exact component={Cover} />
              <Route path="/ent" component={Ent} />
              <Route path="/game/adult/curious-fact" component={CuriousFact} />
              <Route path="/game/ranking" component={Ranking} />
              <Route path="/game/memorize" exact component={Memorize} />
              <Route path="/game/puzzle" component={Jigsaw} />
              <Route path="/game/adult" component={Game} />
              <Route path="/game/child" component={ChildGame} />
              <Route path="/home/:module/:topic" component={Module} />
              <Route path="/home" component={Home} />
              <Route path="/homeNiño" component={HomeNiño} />
              <Route path="/menuChild" component={menuChild} />

              {/* <Route path="/modules" component={Modules} /> */}
              <Route path="/game" component={HomeGame} />
            </Switch>
            <Footer></Footer>
          </Router>
        </ColorsContext.Provider>
      </div>
    </Fragment>
  );
}

export default App;