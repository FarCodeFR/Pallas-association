"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../../styles/contact.css";

function Contact() {
  const [visible, setVisible] = useState(false);
  const handleClickVisible = () => {
    setVisible((prev) => !prev);
  };
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(
      ".container-contact, .container-number, .container-form, .container-form-div"
    );
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 200);
    });
  }, []);
  return (
    <main className="container-contact">
      <div className="style-line-contact"></div>
      <h1>Nous contacter</h1>
      <p>
        Vous avez besoin d&#39;informations complémentaires, contactez-nous:
      </p>
      <div className="container-number">
        <input
          type={visible ? "text" : "password"}
          id="numéro"
          placeholder={visible ? "06 29 57 33 36" : "** ** ** ** **"}
          disabled
        />
        <button
          type="button"
          className="eye-button"
          onClick={handleClickVisible}
          aria-label={visible ? "Masquer le numéro" : "Afficher le numéro"}
        >
          <Image
            src={visible ? "/images/eye-open.png" : "/images/eye-close.png"}
            alt={visible ? "numéro affiché" : "numéro masqué"}
            width={20}
            height={20}
          />
        </button>
      </div>
      <form action="" className="container-form">
        <div className="container-form-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="name"
            required
            placeholder="Jean-50@live.fr"
          />
        </div>
        <div className="container-form-div">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            required
            id="name"
            name="name"
            placeholder="Jean"
          />
        </div>
        <section>
          <div>
            <label htmlFor="particulier">Particulier</label>
            <input required type="radio" name="clientType" id="particulier" />
          </div>
          <div>
            <label htmlFor="entreprise">Entreprise</label>
            <input required type="radio" name="clientType" id="entreprise" />
          </div>
        </section>
        <div className="container-form-div">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Rédigez votre message"
            name="message"
            required
            id="message"
          />
        </div>
        <button type="submit">Envoyer votre message</button>
      </form>
    </main>
  );
}
export default Contact;
