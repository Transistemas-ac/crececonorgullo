"use client";

import Image from "next/image";
import "@/styles/shared/variables.css";
import "@/styles/home.css";
import "@/styles/conceptos.css";

export default function ConceptosClaves() {
  const conceptos = [
    {
      titulo: "¿Qué es el sexo?",
      descripcion:
        "El sexo se refiere a las características biológicas (cromosomas, hormonas, genitales) que definen si una persona nace como macho o hembra."
    },
    {
      titulo: "¿Qué es el género?",
      descripcion:
        "El género es la construcción social que define los roles, identidades y expresiones que cada sociedad asigna a hombres y mujeres."
    },
    {
      titulo: "¿Qué es la identidad de género?",
      descripcion:
        "La identidad de género es la experiencia interna e individual del género que cada persona siente y expresa, independientemente de su sexo asignado al nacer."
    },
    {
      titulo: "¿Qué es la expresión de género?",
      descripcion:
        "La expresión de género es la forma en que una persona presenta su género al mundo a través de su apariencia, comportamiento y forma de vestirse."
    },
    {
      titulo: "¿Qué es una persona trans?",
      descripcion:
        "Una persona trans es aquella cuya identidad de género no coincide con el sexo asignado al nacer. Incluye a personas transexuales y otras identidades."
    },
    {
      titulo: "¿Qué es una persona no binaria?",
      descripcion:
        "Una persona no binaria es aquella que no se identifica exclusivamente como hombre o mujer, y puede identificar su género de otras formas."
    }
  ];

  return (
    <div className="contenedor_global">
      <div className="contenedor_pagina">
        <div className="img_fondo_pagina" aria-hidden="true">
          <Image src="/img/10.png" alt="" fill style={{ objectFit: "cover" }} />
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
                  src="/img/3.png"
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
      </div>
    </div>
  );
}
