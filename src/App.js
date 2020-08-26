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
import Home from './componets/home';
import LoginModal from './componets/loginModal';
import Modules from './componets/Modules.jsx';
import Module from './componets/Module.jsx';
import Ranking from './componets/ranking';
import Jigsaw from './componets/puzzle';
import Footer from './componets/Footer'

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Cover} />
        <Route path="/ent" component={Ent} />
        <Route path="/game/puzzle" component={Jigsaw} />
        <Route path="/game" component={Game} />
        <Route path="/home" component={Home} />
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