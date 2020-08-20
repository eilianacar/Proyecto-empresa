import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Cover from './componets/cover';
import Ent from './componets/ent';
import Game from './componets/game';
import Home from './componets/home';
import LoginModal from './componets/loginModal';
import Modules from './componets/modules';
import Ranking from './componets/ranking';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Portada</Link>
        <Link to="/ent">Inicio</Link>
        <Link to="/home">Home</Link>
        <Link to="/game">Juegos</Link>
        <Link to="/modules">Modulos</Link>
        <Link to="/loginModal">Login del Juego</Link>
        <Link to="/ranking">Ranking</Link>       
        <Switch>
          <Route path="/" exact component= {Cover}/>
          <Route path="/ent" component= {Ent}/>
          <Route path="/game" component= {Game}/>  
          <Route path="/home" component= {Home}/>
          <Route path="/loginModal" component= {LoginModal}/>
          <Route path="/modules" component= {Modules}/>
          <Route path="/ranking" component= {Ranking}/>             
        </Switch>
      </div>
    </Router>
  );
}

export default App;


