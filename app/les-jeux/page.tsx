"use client";
import PartnerCarousel from "@/components/Carrousel";
import "../../styles/games.css";
import gamesImages from "../data/games.json";
import { useEffect } from "react";

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
      <h2>
        Le jardin <br /> de l&#39;Olympe
      </h2>
      <PartnerCarousel
        partnerImages={gamesImages}
        ariaLabel="Carrousel du jardin de l'Olympe"
      />
      <p>Déscription</p>
      <h2>
        L&#39;atelier <br /> communication
      </h2>
      <PartnerCarousel
        partnerImages={gamesImages}
        ariaLabel="Carrousel de l'atelier communication"
      />
      <p>Déscription</p>
    </main>
  );
}
export default Games;
