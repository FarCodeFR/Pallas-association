"use client";
import "../styles/burger-menu.css";
import { useState } from "react";
import NavLink from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <button className="burger-button" onClick={toggleMenu}>
        <img src={isOpen ? "/images/close.svg" : "/images/menu.svg"}></img>
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
