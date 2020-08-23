//Para mostrar la lista de los modulos
import React from 'react';
import data from '../modules.json';
const Modules = (props) => {
  const module1 = data[0].module1;
  const module2 = data[0].module2;
  const module3 = data[0].module3;
  
  //MÓDULO 1: CORONAVIRUS
  const titleAndContent = [module1.topic1[0].title, module1.topic1[0].content];
  /* console.log("Modulo 1:", module1.title)
  console.log("Tema 1:", titleAndContent[0], "Contenido:", titleAndContent[1]); */

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
  const module3Topic4Bulletpoints = module3Topic4Subtopics[1][1].forEach(bulletPoint => console.log(bulletPoint));
  /*Subtemas: Enfoque,
              8 consejos para padres
  */
  //console.log(module3Topic4Bulletpoints);

  return (
    <div>
      <article>
        <section>
        <p>Módulo 1.1: ¿Qué está pasando?</p>
        </section>
        <main>
          <p>
            Vivimos algo histórico. Si hubiésemos hecho el ejercicio de imaginarnos lo que está ocurriendo antes de que pasara, probablemente no hubiésemos podido imaginar conexactitud todo lo que está ocurriendo y todo lo que esta situación conlleva.
          </p>
          <img src="" alt=""/>
        </main>
        
      </article>
    </div>
  );
}

export default Modules;