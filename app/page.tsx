"use client";
import { useEffect } from "react";
import "../styles/home.css";
import NavLink from "next/link";

function Home() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(
      ".container-page-home, .container-card-one, .container-card-two"
    );
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 200);
    });
  }, []);
  return (
    <main className="container-page-home">
      <div className="style-line-home"></div>
      <section className="container-card-one">
        <article>
          <h2>
            Transmettre l&#39;essentiel <span> pour soi et le vivant </span>
          </h2>
          <p>
            Par le jeu, Pallas éducation transmet aux jeunes des informations
            <br /> utiles et pratiques au quotidien pour se sentir bien dans son
            corps, <br /> dans sa tête et avec son environnement.
          </p>
        </article>
        <div>
          <picture></picture>
          <NavLink href="/les-jeux">Voir les jeux disponibles</NavLink>
        </div>
      </section>
      <section className="container-card-two">
        <article>
          <h2>
            Des escape games et ateliers
            <span> conçus pour les jeunes </span>
          </h2>
          <p>
            Optimisés pour les 9-17 ans, nos animateurs adaptent la séance en
            <br />
            fonction de l&#39;âge des bénéficiaires, de 7 à 77 ans! En intérieur
            ou en
            <br />
            extérieur, en petit ou grand groupe, découvrez les spécificités de
            nos
            <br />
            scénarios.
          </p>
        </article>
        <div>
          <picture></picture>
          <div>
            <NavLink href="/les-jeux">Le jardin de l&#39;Olympe</NavLink>
            <NavLink href="/les-jeux">L&#39;atelier communication</NavLink>
          </div>
        </div>
      </section>
      <section className="container-card-one">
        <article>
          <h2>
            Du Marais Poitevin au bord de Loire,
            <span> réserver votre moment d&#39;apprentissage </span>
            <span>joyeux</span>
          </h2>
          <p>
            Basés à Clisson, nous intervenons régulièrement dans les <br />
            établissements scolaires, les espaces jeunes, les missions locales,
            <br />
            les centres socio-culturels et les centres de loisirs des
            Deux-Sèvres,
            <br />
            Loire-Atlantique, Maine-et-Loire et Vendée.
          </p>
        </article>
        <div>
          <picture></picture>
          <NavLink href="/contact">
            Contactez-nous pour plus <br /> d&#39;informations
          </NavLink>
        </div>
      </section>
      <section className="container-card-three">
        <article>
          <h2>À propos</h2>
          <p>
            Nous proposons des activités conçues par nos équipes ayant pour{" "}
            <br />
            but de transmettre de manière ludique, principalement aux jeunes,
            des savoirs leur permettant d&#39;être en meilleure santé mentale et
            physique, de gagner en autonomie au quotidien, de participer
            activement à la vie citoyenne et de les préparer à affronter
            ensemble les problématiques économiques, sociales et
            environnementales de demain. <br />
            <br />
            Ayant la volonté de rendre accessible au plus grand nombre nos
            activités, nous priorisons nos actions auprès des publics jeunes,
            fragiles des Pays de la Loire et des organismes qui les
            accompagnent.
            <br />
            <br />
            Notre équipe de bénévoles est composée d&#39;éducateurs,
            d&#39;ingénieur pédagogique, de concepteurs de jeux, de
            professionnels de la communication tous passionnés par
            l&#39;éducation.
          </p>
        </article>
        <div>
          <picture></picture>
          <div>
            <NavLink href="/A-propos">En savoir plus</NavLink>
            <NavLink href="/nous-aider">Nous aider</NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
