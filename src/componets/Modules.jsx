//Para mostrar la lista de los modulos
import React from 'react';
import Module from './Module.jsx';
import { Link } from 'react-router-dom';

const Modules = (props) => {
 
 /*  console.log(props.match); */
  return (
    <div>
      <h1>Acá va la lista de módulos con sus temas</h1>
      <h2>Cada link de módulo llega a un módulo específico con sus temas</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/1/qué-está-pasando`}>Módulo 1, Tema 1</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/promoción-del-bienestar`}>Módulo 2, Tema 1</Link>

        </li>
        <li>
          <Link to={`${props.match.url}/3/instalación-y-control-de-hábitos`}>Módulo 3, Tema 1</Link>
        </li>
      </ul>

    </div>
  );
}

export default Modules;