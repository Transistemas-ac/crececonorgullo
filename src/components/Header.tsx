import Link from "next/link";
import Image from "next/image";
import "@/styles/header.css";

export default function Header() {
  return (
    <header className="contenedor_superior">
      <nav
        className="contenedor_superior_menu"
        aria-label="Navegación principal"
      >
        <Link href="/" className="contenedor_logo_2" aria-label="Ir al inicio">
          <Image
            src="/img/1.png"
            className="cont_logo_icono_2"
            alt="Logo Crece Con Orgullo"
            width={120}
            height={60}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </nav>
      <div className="contenedor_menu_total">
        <div className="btn_menu" role="button" aria-label="Abrir menú">
          <i className="fas fa-bars" aria-hidden="true"></i>
          <nav className="contenedor_total" aria-label="Menú de navegación">
            <ul className="contenedor_menu">
              <li>
                <Link href="/">
                  <Image
                    src="/img/2.png"
                    className="imagen_icono"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <span className="opcion_menu animated_hover">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/tus-derechos">
                  <Image
                    src="/img/13.png"
                    className="imagen_icono"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <span className="opcion_menu animated_hover">
                    Tus derechos
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/hospitales">
                  <Image
                    src="/img/4.png"
                    className="imagen_icono"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <span className="opcion_menu animated_hover">Hospitales</span>
                </Link>
              </li>
              <li>
                <Link href="/conceptos-claves">
                  <Image
                    src="/img/3.png"
                    className="imagen_icono"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <span className="opcion_menu animated_hover">
                    Conceptos clave
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <Image
                    src="/img/15.png"
                    className="imagen_icono"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <span className="opcion_menu animated_hover">Contacto</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="contenedor_imagen">
        <Image
          src="/img/9.png"
          className="imagen_fondo"
          alt=""
          width={150}
          height={100}
        />
      </div>
    </header>
  );
}
