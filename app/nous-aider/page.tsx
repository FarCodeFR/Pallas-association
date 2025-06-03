"use client";
import { useEffect } from "react";
import "../../styles/help.css";
import NavLink from "next/link";
import Link from "next/link";

function Help() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(".container-help");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 200);
    });
  }, []);
  return (
    <main className="container-help">
      <div className="style-line-help"></div>
      <section>
        <h1>Nous aider</h1>
        <p>
          Pour pouvoir continuer de créer de nouvelles activités
          ludopédagogiques et nous permettre de jouer nos scénarios à prix
          réduits ou gratuitement, nous avons besoin de vous!
        </p>
        <div>
          <Link href="#adhere">J&#39;adhère</Link>
          <Link href="#sustain">Je donne de l&#39;argent</Link>
          <Link href="#time">Je donne de mon temps</Link>
        </div>
      </section>
      <section id="adhere">
        <h2>J&#39;adhère à pallas éducation</h2>
        <p>
          En adhérant à Pallas éducation, vous soutenez l&#39;association et
          prenez part à son fonctionnement. Vous bénéficiez d&#39;avantages
          selon votre profil.
        </p>
        <div>
          <NavLink href="">J&#39;adhère</NavLink>
        </div>
      </section>
      <section id="sustain">
        <h2>Je donne de l&#39;argent</h2>
        <p>
          Association d&#39;intérêt général, Pallas éducation vous délivre des
          reçus fiscaux pour vos dons. Rendez-vous sur notre page de don
          sécurisée sur HelloAsso pour effectuer votre don. Le reçu vous sera
          envoyé automatiquement sur le mail renseigné dans le formulaire.
          Chaque don compte, et si vous le pouvez, sachez que nous préférons les
          dons mensuels qui nous permettent d’avoir une trésorerie sans tension.
        </p>
        <div>
          <NavLink href="">Je donne via HelloAsso</NavLink>
        </div>
      </section>
      <section id="time">
        <h2>Je donne de mon temps</h2>
        <picture></picture>
        <p>
          Que ce soit pour quelques minutes ou quelques mois, nous avons besoin
          de vos talents! Retrouvez nos missions prioritaires sur les
          différentes plateformes:
        </p>
        <div>
          <NavLink href="">Benevolt.fr</NavLink>
          <NavLink href="">Komeet.cc</NavLink>
          <NavLink href="contact">J&#39;aimerai participer autrement</NavLink>
        </div>
      </section>
    </main>
  );
}
export default Help;
