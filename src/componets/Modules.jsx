//Para mostrar la lista de los modulos
import React from 'react';
import { Link } from 'react-router-dom';

const Modules = (props) => {
 
 /*  console.log(props.match); */
  return (
    <div>
      <h1>Acá va la lista de módulos con sus temas</h1>
      <h2>Cada link de módulo llega a un módulo específico con sus temas</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/1/topic1`}>Módulo 1, Tema 1</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic1`}>Módulo 2, Tema 1</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic2`}>Módulo 2, Tema 2</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic3`}>Módulo 2, Tema 3</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic4`}>Módulo 2, Tema 4</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic5`}>Módulo 2, Tema 5</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic6`}>Módulo 2, Tema 6</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic7`}>Módulo 2, Tema 7</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic8`}>Módulo 2, Tema 8</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic9`}>Módulo 2, Tema 9</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/2/topic10`}>Módulo 2, Tema 10</Link>

        </li>
        <li>
          <Link to={`${props.match.url}/3/topic1`}>Módulo 3, Tema 1</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/3/topic2`}>Módulo 3, Tema 2</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/3/topic3`}>Módulo 3, Tema 3</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/3/topic4`}>Módulo 3, Tema 4</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/3/topic5`}>Módulo 3, Tema 5</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/3/topic6`}>Módulo 3, Tema 6</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/3/topic7`}>Módulo 3, Tema 7</Link>
        </li>
      </ul>

    </div>
  );
}

export default Modules;