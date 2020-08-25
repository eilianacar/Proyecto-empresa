import React, { useState, useEffect } from 'react';
import data from '../modules.json';
import '../styles/Modules.css';
import image from '../assests/GAV_Personaje09.png';

const Module = (props) => {
  const [moduleState, setModuleState] = useState('');

  const searchingData = (module, topic) => {
    console.log(data[0][module][topic]);
    let moduleTitle = data[0][module].title;
    let topicTitle = data[0][module][topic].title;
    if (module !== '3') {
      let topicContent = data[0][module][topic].content;
      setModuleState({
        module: `Módulo ${module}: ${moduleTitle}`,
        topic: `Tema: ${topicTitle}`,
        content: topicContent

      })
      } else if (topic === '5') {
        alert("con list items")
      }
    }
    
  useEffect(() => {
    let module = props.match.params.module;
    let topic = props.match.params.topic;
    console.log(module, topic);
    searchingData(module, topic);
  }, [])
 

  return (
    <div>
      <main className="container">
        <section className="heading">                                                                           
          <h1>{moduleState.module}</h1>
        </section>
        <section className="contentWrapper">
          <h2>{moduleState.topic}</h2>
          <section className="content">
            <p>                                                                         
              {moduleState.content}
            </p>
            <div className="image-container">
              <img src={image} alt="" />
            </div>
          </section>
          
        </section>
      </main>
    </div>
  );
}

export default Module;