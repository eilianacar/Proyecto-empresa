import React, { useState, useEffect } from 'react';
import data from '../modules.json';
import style from '../styles/Modules.css';
import image from '../assests/GAV_Personaje09.png';

const Module = (props) => {
  console.log(props.match.params);
  const module1 = data[0].module1;
  const module2 = data[0].module2;
  const module3 = data[0].module3;

  const [moduleState, setModuleState] = useState('');
  //MÓDULO 1: CORONAVIRUS
  const titleAndContent = [module1.title, module1.topic1[0].title, module1.topic1[0].content];  
  //MÓDULO 2: PROMOCIÓN DEL BIENESTAR
  const module2Content = Object.values(module2);
  const module2Title = module2Content[0];
  //Módulo 2, Tema 1: La socialización
  const module2Topic1 = [module2Content[1][0].title, module2Content[1][0].content[0]];
  /* console.log("Tema 1:", module2Topic1[0], "Contenido:", module2Topic1[1]); */

  //Módulo 2, Tema 2: ¿Cómo cambia la mente de los niños y niñas?
  const module2Topic2 = module2Content[2].map(subtopic => {
    return [subtopic.title, subtopic.content[0]];
  })
  module2Topic2.forEach(subtopic => {
    /*Subtemas: Mecanismos del miedo en esta edad,
                ¿Cómo afecta esta sensación a cada ciclo?
    */
    //console.log("Título:", subtopic[0], "Contenido:", subtopic[1]);
  });

  //Módulo 2, Tema 3: Psicohigiene, El cuidado de uno mismo y de los demás
  const module2Topic3 = module2Content[3].map(subtopic => {
    return [subtopic.title, subtopic.content[0]];
  });
  module2Topic3.forEach(subtopic => {
    /*Subtemas: ¿Cómo saber si me falta higiene mental?,
                ¿Qué debemos cuidar?: Los pensamientos,
                ¿Qué debemos cuidar?: Los sentimientos,
                ¿Qué debemos cuidar?: Las acciones,
                Recomendaciones prácticas para sobrellevar el aislamiento y miedo al contagio
    */
    //console.log("Título:", subtopic[0], "Contenido:", subtopic[1]);
  })

  //MÓDULO 3: SALUD Y APRENDIZAJE
  //Módulo 3, Tema 1: Instalación y control de hábitos saludables para la inmunidad física y mental
  const module3Content = Object.values(module3);
  const module3Title = module3Content[0];
  const module3Topic1 = [module3Content[1][0].title, module3Content[1][0].content[0]];
  //Módulo 3, Tema 2: Modelos de aprendizaje
  const module3Topic2 = [module3Content[2][0].title, module3Content[2][0].content];
  const module3Topic2Subtopics = module3Topic2[1].map(subtopic => {
    return [subtopic.title, subtopic.content];
  })
  module3Topic2Subtopics.forEach(subtopic => {
    /*Subtemas: Condicionamiento operante o instrumental,
                Aprendizaje observacional o vicario,
                Algunos principios transversales
    */
    //console.log("Título:", subtopic[0], "Contenido:", subtopic[1]);
  })
  //Módulo 3, Tema 3: Pasos para aplicar el reforzamiento positivo
  const module3Topic3 = [module3Content[3][0].title, module3Content[3][0].content];
  const module3Topic3BulletPoints = module3Topic3[1].map(bulletPoint => bulletPoint);
  //console.log("Título del tema:", module3Topic3[0], "Puntos:", module3Topic3BulletPoints);

  //Módulo 3, Tema 4: Alimentación
  const module3Topic4 = [module3Content[4][0].title, module3Content[4][0].content];
  const module3Topic4Subtopics = module3Topic4[1].map(subtopic => {
    return [subtopic.title, subtopic.content];
  })
  /* const module3Topic4Bulletpoints = module3Topic4Subtopics[1][1].forEach(bulletPoint => console.log(bulletPoint)); */
  /*Subtemas: Enfoque,
            8 consejos para padres
*/
  //console.log(module3Topic4Bulletpoints);
  useEffect(() => {
    switch (true) {
      case (props.match.params.module === '1' && props.match.params.topic === 'qué-está-pasando'):
        setModuleState({
          title: `Módulo 1: ${titleAndContent[0]}`,
          topic: `Tema 1: ${titleAndContent[1]}`,
          content: titleAndContent[2]
        });
        break;
      case (props.match.params.module === '2' && props.match.params.topic === 'promoción-del-bienestar'):
        setModuleState({
          title: `Módulo 2: ${module2Title}`,
          topic: `Tema 1: ${module2Topic1[0]}`,
          content: module2Topic1[1]
        });
        break;
      case (props.match.params.module === '3' && props.match.params.topic === 'instalación-y-control-de-hábitos'):
        setModuleState({
          title: `Módulo 3: ${module3Title}`,
          topic: `Tema 1: ${module3Topic1[0]}`,
          content: module3Topic1[1]
        })
    }
  }, [])

  return (
    <div>
      <main className="container">
        <section className="heading">
          <h1>{moduleState.title}</h1>
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