"use client";
import PartnerCarousel from "@/components/Carrousel";
import "../../styles/games.css";
import gamesImages from "../data/games.json";
import { useEffect } from "react";
import Image from "next/image";

function Games() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(".container-games");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 200);
    });
  }, []);
  return (
    <main className="container-games">
      <h1>Les jeux</h1>
      <section className="first-carrousel">
        <h2>
          Le jardin <br /> de l&#39;Olympe
        </h2>
        <PartnerCarousel
          partnerImages={gamesImages}
          ariaLabel="Carrousel du jardin de l'Olympe"
        />
        <p>Déscription</p>
        <Image
          src="/images/desktop-style.png"
          width={1188}
          height={768}
          quality={100}
          alt="style décoratif"
        />
      </section>
      <section className="second-carrousel">
        <h2>
          L&#39;atelier <br /> communication
        </h2>
        <PartnerCarousel
          partnerImages={gamesImages}
          ariaLabel="Carrousel de l'atelier communication"
        />
        <p>Déscription</p>
        <Image
          width={1188}
          height={768}
          quality={100}
          src="/images/desktop-style-two.png"
          alt="style décoratif"
        />
      </section>
    </main>
  );
}
export default Games;
