import "../styles/footer.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className="container-footer">
      <Image
        src="/images/logo-footer.jpg"
        alt="logo pallas"
        width={100}
        height={100}
      />
      <p>
        Pallas éducation & ludopédagogie
        <br />
        <br /> 12 rue Traversière 44190 Clisson <br />
        SIRET: 923 088 124 00014 <br /> RNA: W442027986
      </p>
      <p>
        Pallas ludopédagogie est une association loi 1901 qui a pour objet de
        réduire les inégalités d&#39;accès aux savoirs humains essentiels en
        proposant des activités de sensibilisation par le jeu aux bénéficiaires,
        principalement des jeunes.
      </p>
    </footer>
  );
}
export default Footer;
