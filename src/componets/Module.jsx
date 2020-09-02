import React, { useState, useEffect } from 'react';
import data from '../modules.json';
import '../styles/Modules.css';
import ColorsContext from './context/ColorsContext.jsx';

const Module = (props) => {
  const [moduleState, setModuleState] = useState('');

  console.log("Módulo, Tema, Contenido e Imagen actuales: ", moduleState);
  const searchingData = (module, topic) => {
    console.log(data[0][module][topic].image);
    let moduleTitle = data[0][module].title;
    let topicTitle = data[0][module][topic].title;
    let topicContent = data[0][module][topic].content;
    let imgUrl = data[0][module][topic].image;
    setModuleState({
      module: `Módulo ${module}: ${moduleTitle}`,
      topic: `${topicTitle}`,
      content: topicContent,
      image: `${imgUrl}`

    })

  }

  useEffect(() => {
    let module = props.match.params.module;
    let topic = props.match.params.topic;
    console.log(module, topic);
    searchingData(module, topic);
  }, [])


  return (
    <ColorsContext.Consumer>
      {context => {
        return (
          <div>
            <main className="container">
              <section className={context.visionProblemsMode === true ? "heading visionProblemsBlack" : "heading purple"}>
                <h1>{moduleState.module}</h1>
              </section>
              <section className={context.visionProblemsMode === true ? "contentWrapper visionProblemsGrey" : "contentWrapper lightPurple"}>
                <h2>{moduleState.topic}</h2>
                <section className="content">
                  <p>{moduleState.content}</p>
                  <div className="module-image-container">
                    <img className='img-modules' src={moduleState.image} alt="" />
                  </div>
                </section>
              </section>
            </main>
          </div>
        );
      }}
    </ColorsContext.Consumer>

  );
}

export default Module;