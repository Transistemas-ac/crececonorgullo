import Link from "next/link";
import Image from "next/image";
import "@/styles/header.css";

import Img1 from "@/assets/1.png";
import Img2 from "@/assets/2.png";
import Img13 from "@/assets/13.png";
import Img4 from "@/assets/4.png";
import Img3 from "@/assets/3.png";
import Img15 from "@/assets/15.png";
import Img9 from "@/assets/9.png";

export default function Header() {
  return (
    <header className="contenedor_superior">
      <nav
        className="contenedor_superior_menu"
        aria-label="Navegación principal"
      >
        <Link href="/" className="contenedor_logo_2" aria-label="Ir al inicio">
          <Image
            src={Img1}
            className="cont_logo_icono_2"
            alt="Logo Crece Con Orgullo"
            width={120}
            height={60}
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
                    src={Img2}
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
                    src={Img13}
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
                    src={Img4}
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
                    src={Img3}
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
                    src={Img15}
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
          src={Img9}
          className="imagen_fondo"
          alt=""
          width={150}
          height={100}
        />
      </div>
    </header>
  );
}
