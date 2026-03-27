"use client";

import Image from "next/image";
import Link from "next/link";
import "@/styles/shared/variables.css";
import "@/styles/home.css";

import Img10 from "@/assets/10.png";
import Img1 from "@/assets/1.png";
import Img2 from "@/assets/2.png";
import Img12 from "@/assets/12.png";
import Img14 from "@/assets/14.png";
import Img13 from "@/assets/13.png";
import Img7 from "@/assets/7.png";

export default function Home() {
  return (
    <div className="contenedor_global">
      <div className="contenedor_pagina">
        <div className="img_fondo_pagina" aria-hidden="true">
          <Image src={Img10} alt="" fill style={{ objectFit: "cover" }} />
        </div>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-content">
            <p id="hero-title" className="texto">
              Este sitio presenta información sobre el programa{" "}
              <strong>Crece con Orgullo</strong>, una política pública del
              Gobierno de Chile.
            </p>
            <p className="texto">
              Esta es una reconstrucción independiente hecha por{" "}
              <strong>
                <a href="https://transistemas.org">Transistemas</a>
              </strong>{" "}
              con fines informativos y no corresponde a un sitio oficial.
            </p>
            <nav className="hero-buttons" aria-label="Navegación rápida">
              <a href="#que-es">¿Qué es el programa?</a>
              <a href="#para-quien">¿Para quién es?</a>
              <a href="#componentes">¿Cómo se compone?</a>
              <a href="#necesario">¿Por qué es necesario?</a>
              <a href="#como-acceder">¿Cómo acceder?</a>
            </nav>
          </div>
        </section>

        <section
          className="content-section"
          id="que-es"
          aria-labelledby="que-es-title"
        >
          <header className="section-header">
            <h2 id="que-es-title" className="titulo">
              ¿Qué es el programa Crece Con Orgullo?
            </h2>
            <Image
              src={Img1}
              alt="Logo del programa"
              className="section-image"
              width={100}
              height={100}
            />
          </header>
          <div className="section-content">
            <p className="texto">
              El Programa <strong>Crece Con Orgullo</strong> nace a partir de la{" "}
              <strong>Ley N° 21.120</strong> que{" "}
              <strong>
                reconoce y da protección al Derecho a la Identidad de Género
              </strong>
              , específicamente en su artículo 23:
            </p>
            <blockquote className="texto">
              Los niños, niñas o adolescentes cuya identidad de género no
              coincida con su sexo y nombre registral y sus familias podrán
              acceder a los programas de acompañamiento profesional de que trata
              este artículo. Éstos consistirán en una orientación profesional
              multidisciplinaria que incluirá acciones de asesoramiento
              psicológico y biopsicosocial, cuyo objeto será el otorgamiento de
              herramientas que permitan su desarrollo integral, de acuerdo a su
              identidad de género.
            </blockquote>
          </div>
        </section>

        <section
          className="content-section alt-bg"
          id="para-quien"
          aria-labelledby="para-quien-title"
        >
          <header className="section-header">
            <h2 id="para-quien-title" className="titulo">
              ¿Para quién es el programa?
            </h2>
            <Image
              src={Img2}
              alt="Icono de personas"
              className="section-image"
              width={100}
              height={100}
            />
          </header>
          <div className="section-content">
            <p className="texto">
              El programa está dirigido a{" "}
              <strong>niñas, niños y adolescentes</strong> (NNA){" "}
              <strong>trans</strong> y <strong>no binarios </strong>
              entre <strong>3 y 17 años</strong>, que requieran acompañamiento
              profesional para el reconocimiento y vivencia de su identidad de
              género.
            </p>
            <p className="texto">
              Así como también a sus <strong>familias</strong>, a los{" "}
              <strong>establecimientos educacionales</strong> donde estudien y a
              los <strong>equipos de salud</strong> que les atiendan.
            </p>
          </div>
        </section>

        <section
          className="content-section"
          id="componentes"
          aria-labelledby="componentes-title"
        >
          <h2 id="componentes-title" className="titulo">
            ¿Cómo se compone el programa?
          </h2>
          <div className="contenedor_seccion">
            <article className="card">
              <Image src={Img12} alt="" width={100} height={100} />
              <div className="card-content">
                <h3>
                  <strong>Acompañamiento psicológico:</strong>
                </h3>
                <p>
                  Sesiones de orientación y apoyo emocional con profesionales de
                  la psicología.
                </p>
              </div>
            </article>
            <article className="card">
              <Image src={Img14} alt="" width={100} height={100} />
              <div className="card-content">
                <h3>
                  <strong>Acompañamiento social:</strong>
                </h3>
                <p>
                  Intervención psicosocial y trabajo en red con la familia y
                  comunidad.
                </p>
              </div>
            </article>
            <article className="card">
              <Image src={Img13} alt="" width={100} height={100} />
              <div className="card-content">
                <h3>
                  <strong>Acompañamiento jurídico:</strong>
                </h3>
                <p>
                  Orientación en materia de derechos y procesos legales
                  relacionados con la identidad de género.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="content-section alt-bg"
          id="necesario"
          aria-labelledby="necesario-title"
        >
          <div className="contenedor_imagen_separacion" aria-hidden="true">
            <Image
              src={Img7}
              className="imagen"
              alt=""
              width={50}
              height={50}
            />
            <Image
              src={Img7}
              className="imagen"
              alt=""
              width={50}
              height={50}
            />
            <Image
              src={Img7}
              className="imagen"
              alt=""
              width={50}
              height={50}
            />
            <Image
              src={Img7}
              className="imagen"
              alt=""
              width={50}
              height={50}
            />
            <Image
              src={Img7}
              className="imagen"
              alt=""
              width={50}
              height={50}
            />
          </div>
          <h2 id="necesario-title" className="titulo">
            ¿Por qué es necesario el Programa Crece Con Orgullo?
          </h2>
          <div className="contenedor_seccion">
            <article className="info-card">
              <p>
                Para entregar{" "}
                <strong>
                  información certera y fidedigna, apoyo y/o orientación en el
                  proceso de develación y vivencia plena
                </strong>{" "}
                de la identidad de género a niños, niñas y adolescentes.
                Participar del programa permitirá potenciar sus recursos
                personales frente a los posibles desafíos a enfrentar.
              </p>
            </article>
            <article className="info-card">
              <p>
                A veces son{" "}
                <strong>
                  las familias quienes requieren dicha orientación
                </strong>{" "}
                para abordar de mejor forma la temática de las
                transdiversidades, y para desarrollar una crianza respetuosa. El
                programa permitirá apoyarles en los desafíos que podría
                enfrentar el niño, niña o adolescente a su cuidado.
              </p>
            </article>
            <article className="info-card">
              <p>
                En el caso de los establecimientos educacionales, el programa
                permitirá <strong>potenciar sus conocimientos</strong> en
                materia de transdiversidades para prevenir la violencia y la
                discriminación en razón del género dentro de las comunidades
                escolares.
              </p>
            </article>
            <article className="info-card">
              <p>
                Por último, en términos generales, el programa Crece Con Orgullo
                permite que los menores de edad y sus familias se vinculen con{" "}
                <strong>
                  redes de atención pública respetuosas de las identidades y/o
                  expresiones de género diversas,
                </strong>{" "}
                y que los profesionales de la salud puedan{" "}
                <strong>identificar posibles factores de riesgo</strong> y
                trabajar en la mitigación de estos.
              </p>
            </article>
          </div>
        </section>

        <section
          className="content-section"
          id="como-acceder"
          aria-labelledby="como-acceder-title"
        >
          <h2 id="como-acceder-title" className="titulo">
            ¿Cómo acceder al programa?
          </h2>
          <div className="contenedor_seccion">
            <article className="info-card full-width">
              <p>
                Para acceder al Programa Crece Con Orgullo, debes dirigirte a
                uno de los <strong>hospitales participantes</strong> en tu
                región. El programa está disponible para niños, niñas y
                adolescentes trans y no binarios entre 0 y 17 años, junto a sus
                familias.
              </p>
            </article>
          </div>
          <div className="hero-buttons">
            <Link href="/hospitales">Ver hospitales</Link>
            <Link href="/conceptos-claves">Conceptos clave</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
