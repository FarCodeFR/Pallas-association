"use client";
import "../../styles/about.css";
import Office from "../../components/Office";
import Partner from "@/components/Partner";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(".container-about");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 200);
    });
  }, []);
  return (
    <main className="container-about">
      <section>
        <h1>À propos</h1>
        <p>
          Nous proposons des activités conçues par nos équipes ayant pour <br />
          but de transmettre de manière ludique, principalement aux jeunes,
          <br /> des savoirs leur permettant d&#39;être en meilleure santé
          mentale et <br /> physique, de gagner en autonomie au quotidien, de
          participer <br /> activement à la vie citoyenne et de les préparer à
          affronter ensemble <br /> les problématiques économiques, sociales et
          environnementales de demain. <br />
          <br /> Ayant la volonté de rendre accessible au plus grand nombre nos
          activités, <br /> nous priorisons nos actions auprès des publics
          jeunes, <br /> fragiles des Pays de la Loire et des organismes qui les
          accompagnent.
          <br /> <br /> Notre équipe de bénévoles est composée d&#39;éducateurs,
          d&#39;ingénieur
          <br /> pédagogique, de concepteurs de jeux, de professionnels de la
          <br /> communication tous passionnés par l&#39;éducation.
        </p>
        <div>
          <button>Nous aider</button>
          <button>Adhérer</button>
          <button>Nous contacter</button>
        </div>
        <picture></picture>
      </section>
      <h2>Le bureau</h2>
      <Office />
      <h2>Nos partenaires</h2>
      <Partner />
    </main>
  );
}
export default About;
