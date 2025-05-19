"use client";
import { useEffect } from "react";
import "../styles/home.css";

function Home() {
  useEffect(() => {
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
      <section className="container-card-one">
        <h2>
          Transmettre l&#39;essentiel <span> pour soi et le vivant </span>
        </h2>
        <p>
          Par le jeu, Pallas éducation transmet aux jeunes des informations
          <br /> utiles et pratiques au quotidien pour se sentir bien dans son
          corps, <br /> dans sa tête et avec son environnement.
        </p>
        <picture></picture>
        <button>Voir les jeux disponibles</button>
      </section>
      <section className="container-card-two">
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
          extérieur, en petit ou grand groupe, découvrez les spécificités de nos
          <br />
          scénarios.
        </p>
        <picture></picture>
        <div>
          <button>Le jardin de l&#39;Olympe</button>
          <button>L&#39;atelier communication</button>
        </div>
      </section>
      <section className="container-card-one">
        <h2>
          Du Marais Poitevin au bord de Loire,
          <span> réserver votre moment d&#39;apprentissage </span>
          <span>joyeux</span>
        </h2>
        <p>
          Basés à Clisson, nous intervenons régulièrement dans les <br />
          établissements scolaires, les espaces jeunes, les missions locales,
          <br />
          les centres socio-culturels et les centres de loisirs des Deux-Sèvres,
          <br />
          Loire-Atlantique, Maine-et-Loire et Vendée.
        </p>
        <picture></picture>
        <button>
          Contactez-nous pour plus <br /> d&#39;informations
        </button>
      </section>
      <section className="container-card-two">
        <h2>À propos</h2>
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
        <picture></picture>
        <div>
          <button>Le jardin de l&#39;Olympe</button>
          <button>L&#39;atelier communication</button>
        </div>
      </section>
    </main>
  );
}
export default Home;
