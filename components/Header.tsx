"use client";
import "../styles/burger-menu.css";
import { useState } from "react";
import NavLink from "next/link";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="container-navigation">
      <picture>
        <Image
          src="/images/Red-logo.png"
          alt="logo pallas"
          width={100}
          height={100}
        />
      </picture>
      <button className="burger-button" onClick={toggleMenu}>
        <Image
          src={isOpen ? "/images/close.svg" : "/images/menu.svg"}
          alt={isOpen ? "menu burger fermé" : "menu burger ouvert"}
          width={100}
          height={100}
        ></Image>
      </button>
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <nav className="menu-item">
          <ul>
            <li>
              <NavLink href={""}>À Propos</NavLink>
            </li>
            <li>
              <NavLink href={""}>Les jeux</NavLink>
            </li>
            <li>
              <NavLink href={""}>Nous aider</NavLink>
            </li>
            <li>
              <NavLink href={""}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
