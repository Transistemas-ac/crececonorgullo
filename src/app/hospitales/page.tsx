"use client";

import Image from "next/image";
import "@/styles/shared/variables.css";
import "@/styles/home.css";
import "@/styles/hospitales.css";

export default function Hospitales() {
  const hospitales = [
    {
      nombre: "H. DR. JUAN NOÉ CREVANI, ARICA",
      region: "Arica",
      url: "https://www.hjnc.cl/hjnc/"
    },
    {
      nombre: "H. DR. ERNESTO TORRES GALDAMES, IQUIQUE",
      region: "Tarapacá",
      url: "https://www.hospitaliquique.cl/"
    },
    {
      nombre: "H. DR. LEONARDO GUZMAN, ANTOFAGASTA",
      region: "Antofagasta",
      url: "https://www.hospitalantofagasta.gob.cl/"
    },
    {
      nombre: "H. SAN JOSE DEL CARMEN, COPIAPO",
      region: "Atacama",
      url: "https://www.hospitalcopiapo.cl/"
    },
    {
      nombre: "H. SAN JUAN DE DIOS, LA SERENA",
      region: "Coquimbo",
      url: "https://www.hospitalserena.cl/"
    },
    {
      nombre: "H. DE COQUIMBO, COQUIMBO",
      region: "Coquimbo",
      url: "https://www.sscoquimbo.cl/"
    },
    {
      nombre: "H. DR. GUSTAVO FRICKE, VIÑA DEL MAR",
      region: "Valparaíso",
      url: "https://www.hospitalvalparaiso.cl/"
    },
    {
      nombre: "H. SAN JAVIER, LINARES",
      region: "Maule",
      url: "https://www.hospital-sanjavier.cl/"
    },
    {
      nombre: "H. DR. GUILLERMO GRANT BENITEZ, CONCEPCIÓN",
      region: "Biobío",
      url: "https://www.hospitalconcepcion.cl/"
    },
    {
      nombre: "H. DR. SERGIO CULAC, CHILLÁN",
      region: "Ñuble",
      url: "https://www.hospitaludefchile.cl/"
    },
    {
      nombre: "H. DR. RICARDO C. PAVINCUR, TEMUCO",
      region: "Araucanía",
      url: "https://www.hospital.cpoincare.cl/"
    },
    {
      nombre: "H. DR. SAAVEDRA, PUNTA ARENAS",
      region: "Magallanes",
      url: "https://www.hospitalsaopedrode.cl/"
    },
    {
      nombre: "H. REGIONAL DE METROPOLITANA, SANTIAGO",
      region: "Metropolitana",
      url: "https://www.hospitalregional.cl/"
    },
    {
      nombre: "H. DR. EZEQUIEL GONZÁLEZ B., SAN MIGUEL",
      region: "Metropolitana",
      url: "https://www.hospitalexequiel.cl/"
    },
    {
      nombre: "H. SAN JUAN DE DIOS, SANTIAGO",
      region: "Metropolitana",
      url: "https://www.sssalud.gob.cl/"
    },
    {
      nombre: "H. SANTOS DUMONT, SANTIAGO",
      region: "Metropolitana",
      url: "https://www.hospitalsantos.com/"
    },
    {
      nombre: "H. VILLA CENTRAL, SAN BERNARDO",
      region: "Metropolitana",
      url: "https://www.hospitalvillacentral.cl/"
    },
    {
      nombre: "H. EL PINO, SAN BERNARDO",
      region: "Metropolitana",
      url: "https://www.hospitalelpino.cl/"
    }
  ];

  return (
    <div className="contenedor_global">
      <div className="contenedor_pagina">
        <div className="img_fondo_pagina" aria-hidden="true">
          <Image src="/img/10.png" alt="" fill style={{ objectFit: "cover" }} />
        </div>

        <section className="hero-section" aria-labelledby="hospitales-title">
          <div className="hero-content">
            <h1 id="hospitales-title" className="titulo">
              Hospitales con el Programa Crece Con Orgullo
            </h1>
            <p className="texto">
              Encuentra aquí los hospitales donde puedes acceder al programa de
              acompañamiento a la identidad de género.
            </p>
          </div>
        </section>

        <section
          className="content-section"
          aria-labelledby="hospitales-list-title"
        >
          <div className="hospital-grid" id="hospitales-list-title" role="list">
            {hospitales.map((hospital, index) => (
              <a
                key={index}
                href={hospital.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hospital-card"
                role="listitem"
              >
                <h3>{hospital.nombre}</h3>
                <span className="region-badge">{hospital.region}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
