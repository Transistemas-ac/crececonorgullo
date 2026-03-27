"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import "@/styles/shared/variables.css";
import "@/styles/home.css";
import "@/styles/contacto.css";

export default function Contacto() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    formData.append("access_key", "53482b56-750b-4acd-b86a-c9852d9972f1");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }

      console.log("Form submission response:", response);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contenedor_global">
      <div className="contenedor_pagina">
        <div className="img_fondo_pagina" aria-hidden="true">
          <Image src="/img/10.png" alt="" fill style={{ objectFit: "cover" }} />
        </div>

        <section className="hero-section" aria-labelledby="contacto-title">
          <div className="hero-content">
            <h1 id="contacto-title" className="titulo">
              Contáctanos
            </h1>
            <p className="texto">
              Si trabajas o trabajaste en el Programa Crece con Orgullo, o en
              áreas vinculadas dentro del Gobierno de Chile, nos puedes
              contactar para ofrecer tu testimonio, aportar correciones,
              actualizaciones o nuevas vías de contacto para acceder a los
              servicios de este programa.
            </p>
            <p className="texto">
              Este sitio no es un canal oficial de atención del programa. Para
              consultas o acceso a prestaciones, se recomienda contactar a los
              organismos públicos correspondientes.
            </p>
          </div>
          <Image
            src="/img/9.png"
            alt=""
            className="hero-image"
            width={200}
            height={200}
          />
        </section>

        <section className="content-section" aria-labelledby="form-title">
          <form
            ref={formRef}
            id="contact-form"
            className="contact-section-form"
            onSubmit={handleSubmit}
            aria-labelledby="form-title"
          >
            <fieldset className="contact-section-input-container">
              <input
                className="contact-section-input"
                type="text"
                placeholder="Nombre/s:"
                name="nombre"
                required
              />
              <input
                className="contact-section-input"
                type="text"
                placeholder="Pronombre/s:"
                name="pronombres"
              />
              <input
                className="contact-section-input"
                type="email"
                placeholder="Correo electrónico:"
                name="email"
                required
              />
            </fieldset>
            <fieldset className="contact-section-input-container">
              <textarea
                className="contact-section-textarea"
                placeholder="Mensaje:"
                name="message"
              />
              <button
                value="Send"
                type="submit"
                className="contact-section-button button button-icon"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar"}
                <Image
                  className="button-icon"
                  src="data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.5%2014.8748V1.12476C0.5%200.858098%200.6125%200.653931%200.8375%200.512264C1.0625%200.370598%201.3%200.349764%201.55%200.449764L17.85%207.29976C18.15%207.4331%2018.3%207.66643%2018.3%207.99976C18.3%208.3331%2018.15%208.56643%2017.85%208.69976L1.55%2015.5498C1.3%2015.6498%201.0625%2015.6289%200.8375%2015.4873C0.6125%2015.3456%200.5%2015.1414%200.5%2014.8748ZM2%2013.6748L15.6%207.99976L2%202.24976V6.44976L8.05%207.99976L2%209.49976V13.6748ZM2%207.99976V2.24976V13.6748V7.99976Z'%20fill='%231A1A1A'/%3e%3c/svg%3e"
                  alt="Icono de enviar"
                  width={19}
                  height={16}
                />
              </button>
            </fieldset>
          </form>
          {status === "success" && (
            <p className="form-message success">
              Mensaje enviado correctamente. ¡Gracias!
            </p>
          )}
          {status === "error" && (
            <p className="form-message error">
              Error al enviar el mensaje. Intenta de nuevo.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
