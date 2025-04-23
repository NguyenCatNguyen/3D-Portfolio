import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() =>{
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10; // Set a value to determine when the navbar should change
            setScrolled(true);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

  return (
    <header className="navbar scrolled">
      <div className="inner">
        <a href="#hero" className="logo">
          Cat Nguyen
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default NavBar