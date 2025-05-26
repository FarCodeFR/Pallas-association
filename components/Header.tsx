"use client";
import "../styles/burger-menu.css";
import { useState } from "react";
import NavLink from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="container-navigation">
      <picture>
        <NavLink href="/">
          <Image
            priority
            src="/images/Red-logo.png"
            alt="logo pallas"
            width={100}
            height={100}
          />
        </NavLink>
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
              <NavLink
                href="/A-propos"
                onClick={closeMenu}
                className={isActive("/A-propos") ? "active" : ""}
              >
                À Propos
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/les-jeux"
                onClick={closeMenu}
                className={isActive("/les-jeux") ? "active" : ""}
              >
                Les jeux
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/nous-aider"
                onClick={closeMenu}
                className={isActive("/nous-aider") ? "active" : ""}
              >
                Nous aider
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/contact"
                onClick={closeMenu}
                className={isActive("/contact") ? "active" : ""}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
