import { useState } from "react";
import axiroLogo from "../../assets/axiroLogo.png"

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleGetStarted = () => {
    closeMenu();
    onGetStarted();
  };
  return (
      <nav className="navbar">
          <div className="logo">
              <div className="logo-circle">
                  <img
                      src={axiroLogo as string}
                      alt="Axiro Systems"
                      className="logo-image"
                  />
              </div>

              <div>
                  <div className="logo-text">AXIRO SYSTEMS</div>
                  <div className="logo-sub">BOOKING PLATFORM</div>
              </div>
          </div>

<div className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
        <a href="#who-its-for" onClick={closeMenu}>Who It's For</a>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#how-it-works" onClick={closeMenu}>How it works</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <button className="btn-pill" onClick={handleGetStarted}>GET STARTED</button>
      </div>

      <button
        className={`nav-toggle${menuOpen ? " nav-toggle-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      </nav>
  );
}