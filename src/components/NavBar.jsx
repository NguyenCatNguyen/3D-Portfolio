import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.js";

const NavBar = () => {
    const [hidden, setHidden] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > prevScrollY && currentScrollY > 100) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        
        setPrevScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);
  

  return (
    <header className={`navbar ${
      hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    }`}>
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