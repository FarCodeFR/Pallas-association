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
        Mission et statut associatifs
        <br /> loi 1901 <br />
        <br /> 12 rue Traversière 44190 Clisson <br />
        SIRET: 923 088 124 00014 <br /> RNA: W442027986
      </p>
    </footer>
  );
}
export default Footer;
