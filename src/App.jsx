//<---------Librerias-------->
import React, { useState } from 'react';
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
import Game from './componets/game';
import ChildGame from './componets/gameChild.jsx'
import Home from './componets/home';
import HomeNiño from './componets/homeNiño';
import LoginModal from './componets/loginModal';
import Modules from './componets/Modules.jsx';
import Module from './componets/Module.jsx';
import Ranking from './componets/ranking';
import Memorize from './componets/Memorize/MemorizeEntryPoint.jsx';
import Jigsaw from './componets/puzzle';
import Footer from './componets/Footer'
import ColorsContext from './componets/context/ColorsContext.jsx';


const App = () => {
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
    <ColorsContext.Provider
      value={{
        visionProblemsMode: colorsState.visionProblemsMode
      }}
    >
      <Router>
        <Header></Header>
        <button className="change-color-btn" onClick={() => changeColorsHandler()}>Tonos oscuros</button>
        <Switch>
          <Route path="/" exact component={Cover} />
          <Route path="/ent" component={Ent} />
          <Route path="/game/memorize" exact component={Memorize} />
          <Route path="/game/puzzle" component={Jigsaw} />
          <Route path="/game/adult" component={Game} />
          <Route path="/game/child" component={ChildGame} />
          <Route path="/home/:module/:topic" component={Module} />
          <Route path="/home" component={Home} />
          <Route path="/homeNiño" component={HomeNiño} />
          <Route path="/loginModal" component={LoginModal} />

          {/* <Route path="/modules" component={Modules} /> */}
          <Route path="/ranking" component={Ranking} />
        </Switch>
        <Footer></Footer>
      </Router>
    </ColorsContext.Provider>
  );
}

export default App;