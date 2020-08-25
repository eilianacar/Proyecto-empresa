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
import Cover from './componets/Cover';
import Ent from './componets/Ent';
import Game from './componets/game';
import Home from './componets/home';
import LoginModal from './componets/loginModal';
import Modules from './componets/modules';
import Ranking from './componets/ranking';
import Puzzle from './componets/puzzle';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Cover} />
        <Route path="/ent" component={Ent} />
        <Route path="/game" component={Game} />
        <Route path="/home" component={Home} />
        <Route path="/loginModal" component={LoginModal} />
        <Route path="/modules" component={Modules} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/puzzle" component={Puzzle} />
      </Switch>
    </Router>
  );
}

export default App;


