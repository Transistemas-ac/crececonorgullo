import "@/styles/footer.css";
import Image from "next/image";
import Link from "next/link";
import DiscordIcon from "@/assets/media_discord_outline.svg";
import InstagramIcon from "@/assets/media_instagram_outline.svg";
import LinkedInIcon from "@/assets/media_linkedin_outline.svg";
import TransistemasLogo from "@/assets/transistemas.png";

export default function Footer() {
  return (
    <footer className="contenedor_pie">
      <div className="footer-content">
        <div className="footer-left">
          <Image
            src={TransistemasLogo}
            alt="Transistemas"
            className="footer-logo"
            width={120}
            height={60}
          />
        </div>
        <div className="footer-center">
          <p className="informacion">
            Este sitio presenta información sobre el programa &quot;Crece con
            Orgullo&quot;, una iniciativa desarrollada por la Subsecretaría de
            la Niñez del Ministerio de Desarrollo Social y Familia de Chile y la
            Subsecretaría de Redes Asistenciales del Ministerio de Salud de
            Chile, en el marco del Gobierno de Chile. Esta web es una
            reconstrucción independiente con fines informativos y no constituye
            un sitio oficial.
          </p>
        </div>
        <div className="footer-right">
          <div className="contenedor_red_social">
            <Link
              href="https://discord.gg/yuYpD6QW74"
              target="_blank"
              rel="noopener noreferrer"
              className="red_social"
              aria-label="Discord"
            >
              <Image src={DiscordIcon} alt="Discord" width={50} height={50} />
            </Link>
            <Link
              href="https://instagram.com/transistemas"
              target="_blank"
              rel="noopener noreferrer"
              className="red_social"
              aria-label="Instagram"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/transistemasok/"
              target="_blank"
              rel="noopener noreferrer"
              className="red_social"
              aria-label="LinkedIn"
            >
              <Image src={LinkedInIcon} alt="LinkedIn" width={50} height={50} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
