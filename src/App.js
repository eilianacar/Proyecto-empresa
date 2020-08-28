//<---------Librerias-------->
import React from 'react';
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

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Cover} />
        <Route path="/ent" component={Ent} />
        <Route path="/game/memorize" exact component={Memorize} />
        <Route path="/game/puzzle" component={Jigsaw} />
        <Route path="/game/adult" component={Game} />
        <Route path="/game/child" component={ChildGame} />
        <Route path="/home" component={Home} />
        <Route path="/homeNiño" component={HomeNiño} />
        <Route path="/loginModal" component={LoginModal} />
        <Route path="/modules/:module/:topic" component={Module} />
        <Route path="/modules" component={Modules} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;