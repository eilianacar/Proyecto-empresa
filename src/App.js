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
import Modules from './componets/Modules.jsx';
import Module from './componets/Module.jsx';
import Ranking from './componets/ranking';
import Memorize from './componets/Memorize/MemorizeBoard.jsx';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Cover}/>
          <Route path="/ent" component={Ent}/>
          <Route path="/game/memorize" exact component={Memorize}/>
          <Route path="/game" component={Game}/>
          <Route path="/home" component={Home}/>
          <Route path="/loginModal" component={LoginModal}/>
          <Route path="/modules/:module/:topic" component={Module}/>
          <Route path="/modules" component={Modules}/>
          <Route path="/ranking" component={Ranking}/>             
        </Switch>
    </Router>
  );
}

export default App;