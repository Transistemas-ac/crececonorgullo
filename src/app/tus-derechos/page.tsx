"use client";

import Image from "next/image";
import "@/styles/shared/variables.css";
import "@/styles/tus-derechos.css";

export default function TusDerechos() {
  return (
    <div className="contenedor_global">
      <div className="contenedor_pagina">
        <div className="img_fondo_pagina" aria-hidden="true">
          <Image src="/img/10.png" alt="" fill style={{ objectFit: "cover" }} />
        </div>

        <section className="hero-section" aria-labelledby="derechos-title">
          <div className="hero-content">
            <h1 id="derechos-title" className="titulo">
              ¡Que nadie vulnere tus derechos!
            </h1>
            <p className="texto">
              Encuentra aquí una lista de artículos, leyes y decretos que
              protegen los derechos de las personas trans y de género no
              conforme:
            </p>
            <p className="texto">
              <strong>El artículo 2° de la Ley N°20.609</strong> que establece
              medidas contra la discriminación, detalla una lista de categorías
              por las cuales las personas no podemos ser discriminadas
              arbitrariamente, mencionando a la identidad de género como una
              categoría a proteger.
            </p>
          </div>
          <Image
            src="/img/4.png"
            alt=""
            className="hero-image"
            width={200}
            height={200}
          />
        </section>

        <section className="content-section" aria-labelledby="leyes-title">
          <article className="law-card">
            <div className="law-content">
              <h2 className="titulo">
                Ley N°21.120 - Derecho a la Identidad de Género
              </h2>
              <p className="texto">
                Da reconocimiento legal a la identidad de género de todas las
                personas de nuestro país. La ley establece 5 principios para el
                abordaje de las identidades trans y de género no conforme.
              </p>

              <details className="accordion">
                <summary className="btn_ver_datos">Ver principios</summary>
                <div className="accordion-content">
                  <p>
                    <strong>a: Principio de la no patologización:</strong> Las
                    personas trans no pueden ser tratadas como enfermas.
                  </p>
                  <p>
                    <strong>
                      b: Principio de la no discriminación arbitraria:
                    </strong>{" "}
                    No pueden ser discriminadas.
                  </p>
                  <p>
                    <strong>c: Principio de la confidencialidad:</strong> Toda
                    información debe ser tratada de manera confidencial.
                  </p>
                  <p>
                    <strong>d: Principio de la dignidad en el trato:</strong>{" "}
                    Derecho a recibir un trato digno.
                  </p>
                  <p>
                    <strong>e: Principio del interés superior del niño:</strong>{" "}
                    El bienestar del niño es prioritario.
                  </p>
                </div>
              </details>
            </div>
          </article>

          <article className="law-card">
            <div className="law-content">
              <h2 className="titulo">
                Decreto 3 - Reglamento de la Ley N°21.120
              </h2>
              <p className="texto">
                Establece principios, acciones e intervenciones que deben regir
                los programas de acompañamiento profesional.
              </p>

              <details className="accordion">
                <summary className="btn_ver_datos">
                  Ver principios y acciones
                </summary>
                <div className="accordion-content">
                  <p>
                    <strong>Principios:</strong>
                  </p>
                  <ul>
                    <li>El interés superior del niño</li>
                    <li>Su derecho a ser oído</li>
                    <li>La autonomía progresiva</li>
                    <li>La no patologización</li>
                    <li>La no discriminación arbitraria</li>
                    <li>La confidencialidad y dignidad de trato</li>
                  </ul>
                  <p>
                    <strong>Acciones:</strong>
                  </p>
                  <ul>
                    <li>Acogida y contención</li>
                    <li>Orientación a la familia</li>
                    <li>Evaluación psicosocial</li>
                    <li>Visitas domiciliarias</li>
                    <li>Consulta con psicólogo/a</li>
                    <li>Intervención familiar</li>
                    <li>Acompañamiento en decisiones</li>
                    <li>Seguimiento</li>
                  </ul>
                </div>
              </details>
            </div>
          </article>
        </section>

        <section
          className="content-section alt-bg"
          aria-labelledby="circulares-title"
        >
          <h2 id="circulares-title" className="titulo">
            Circulares del Ministerio de Salud
          </h2>

          <div className="circulares-grid">
            <article className="info-card">
              <h3>Circular 21</h3>
              <p>
                Establece el <strong>respeto al nombre social</strong> en la
                atención en salud. El nombre social debe ser consignado en
                fichas clínicas, recetas, órdenes de exámenes, etc.
              </p>
            </article>

            <article className="info-card">
              <h3>Circular 5</h3>
              <p>
                Abordaje afirmativo en salud de carácter despatologizante.
                Refuerza el respeto del nombre social y pronombres.
              </p>
            </article>

            <article className="info-card">
              <h3>Circular 6</h3>
              <p>
                Cuidado adecuado en salud mental para personas LGBTIQA+. Las
                &quot;terapias reparativas&quot; no son prácticas validadas.
              </p>
            </article>
            <article className="info-card">
              <h3>Circular 812 del Ministerio de Educación</h3>
              <p>
                Principios básicos para el abordaje de las identidades trans en
                establecimientos educacionales. Contiene definiciones,
                principios, obligaciones y procedimientos.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
