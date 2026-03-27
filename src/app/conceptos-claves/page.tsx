"use client";

import Image from "next/image";
import "@/styles/shared/variables.css";
import "@/styles/home.css";
import "@/styles/conceptos.css";

import Img10 from "@/assets/10.png";
import Img3 from "@/assets/3.png";

export default function ConceptosClaves() {
  const conceptos = [
    {
      titulo: "¿Qué es el sexo?",
      descripcion:
        "Se refiere a las diferencias y características biológicas, anatómicas, fisiológicas y cromosómicas de los seres humanos que los definen como hombres o mujeres; son características con las que se nace, y son universales, es decir, comunes a todas las sociedades y culturas y son inmodificables."
    },
    {
      titulo: "¿Qué es el género?",
      descripcion:
        "Conjunto de ideas, creencias y atribuciones sociales, que se construyen en cada cultura y momento histórico con base en la diferencia sexual. Y sus rasgos se han ido moldeando a lo largo de la historia de las relaciones sociales."
    },
    {
      titulo: "¿Qué es la identidad de género?",
      descripcion:
        "Es la vivencia interna e individual del género tal como cada persona la siente profundamente, la cual podría corresponder o no con el sexo asignado al momento del nacimiento, incluyendo la vivencia personal del cuerpo (que podría involucrar la modificación de la apariencia o la función corporal a través de medios médicos, quirúrgicos o de otra índole, siempre que la misma sea libremente escogida) y otras expresiones de género, incluyendo la vestimenta, el modo de hablar y los modales, tal como lo definen los Principios de Yogyakarta."
    },
    {
      titulo: "¿Qué es la expresión de género?",
      descripcion:
        "Es la forma mediante la cual las personas expresamos nuestra identidad de género. Puede ser a través de la ropa, apariencia, manierismos, entre otros. La expresión de género de una persona no necesariamente se ajusta a lo que la sociedad pueda esperar de su género o sexo, mientras que sí se puede clasificar en los espectros femenino, masculino y andrógino."
    },
    {
      titulo: "¿Qué es la orientación sexual?",
      descripcion:
        "Se refiere a la capacidad de cada persona de sentir atracción emocional, afectiva y sexual por personas de un género diferente al suyo, o de su mismo género, o de más de un género, así como a la capacidad mantener relaciones íntimas y sexuales con estas personas."
    },
    {
      titulo: "¿Qué significa persona cisgénero?",
      descripcion:
        "Son personas que tienen una coherencia entre el sexo biológico y el género socialmente asignado a dicha categoría."
    },
    {
      titulo: "¿Qué significa persona transgénero?",
      descripcion:
        "Se trata de personas cuya identidad de género, expresión de género o conducta no se ajusta a aquella generalmente asociado con el sexo que se asigna al nacer. También se utiliza como un término más génerico, que también abarca a las personas transexuales y travestis."
    },
    {
      titulo: "¿Qué significa persona de género no conforme?",
      descripcion:
        "Son personas que presentan matices en su identidad de género, es decir, que no se sienten del todo dentro de lo que socialmente se entiende como 'femenino' o 'masculino'. Cabe destacar que no todas las personas de identidad de género no conforme tienen expresiones de género andróginas."
    },
    {
      titulo: "¿Qué es el acompañamiento psicosocial?",
      descripcion:
        "El acompañamiento psicosocial es una práctica que se brinda para satisfacer las necesidades mentales, emocionales y espirituales de las personas y sus familias y está orientado principalmente a personas que vivencian situaciones no esperables dentro de la norma."
    },
    {
      titulo: "¿Por qué los niños y niñas desde tres años pueden acceder a este programa?",
      descripcion:
        "Actualmente, la evidencia científica indica que los niños y niñas pueden diferenciar al resto de las personas según la categoría de género a la que pertenecen. Esto implica que los niños y niñas presentan la autonomía suficiente como para referirse o definirse a sí mismos como 'niños o niñas'. Actualmente, existen niños y niñas que manifiestan disconformidad con el género asignado al nacer. En muchos casos, esta situación despierta preocupación en los padres, optando por acceder a un acompañamiento psicosocial que les sirva de guía para apoyar a su hijo o hija a través del ejercicio de una crianza respetuosa."
    }
  ];

  const viasAcceso = [
    {
      titulo: "Consulta espontánea",
      descripcion:
        "La solicitud puede ser realizada por el niño, niña o adolescente, por la familia, o por alguno de los puntos de contacto en la red de salud."
    },
    {
      titulo: "Derivación desde intersector",
      descripcion:
        "Si te encuentras recibiendo atención en otra institución, esta puede solicitar una evaluación al Programa Crece Con Orgullo mediante documento electrónico. Los profesionales del programa recepcionarán la información, acusarán el recibo a la institución, asignando una hora de atención."
    },
    {
      titulo: "Detección en controles de salud",
      descripcion:
        "En la supervisión de salud, o control sano, se podrá explorar la identidad durante la entrevista y generar una derivación, si es requerido. Esta derivación no puede realizarse sin el asentimiento expreso del niño, niña o adolescente."
    }
  ];

  return (
    <div className="contenedor_global">
      <div className="contenedor_pagina">
        <div className="img_fondo_pagina" aria-hidden="true">
          <Image src={Img10} alt="" fill style={{ objectFit: "cover" }} />
        </div>

        <section className="hero-section" aria-labelledby="conceptos-title">
          <div className="hero-content">
            <h1 id="conceptos-title" className="titulo">
              Conceptos Claves
            </h1>
            <p className="texto">
              Conoce los términos fundamentales relacionados con la identidad de
              género.
            </p>
          </div>
        </section>

        <section
          className="content-section"
          aria-labelledby="conceptos-list-title"
        >
          <div className="conceptos-grid" id="conceptos-list-title">
            {conceptos.map((concepto, index) => (
              <article key={index} className="concepto-card">
                <Image
                  src={Img3}
                  alt=""
                  className="concepto-icon"
                  width={50}
                  height={50}
                />
                <h3>{concepto.titulo}</h3>
                <p>{concepto.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="acceso-section" aria-labelledby="acceso-title">
          <h2 id="acceso-title" className="titulo-acceso">
            ¿Cómo puedo acceder al Programa Crece con Orgullo?
          </h2>
          <p className="texto-acceso">
            Podrás acceder al programa a través de estas 3 vías:
          </p>
          <div className="vias-grid">
            {viasAcceso.map((via, index) => (
              <article key={index} className="via-card">
                <div className="via-numero">{index + 1}</div>
                <h3>{via.titulo}</h3>
                <p>{via.descripcion}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
