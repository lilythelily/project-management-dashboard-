import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import logo from '../assets/logo.svg';
import logoMark from "../assets/logo-mark.svg";
import chevronRight from "../assets/icons/chevron-right.svg";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setOverlay((prev) => !prev);
  };
  const menuRef = useRef(null);

  // --- home tab active ---
  const [homeActive, setHomeActive] = useState(false);
  const toggleHome = () => {
    setHomeActive(true);
    setResourceActive(false);
  }

  // --- resource tab active ---
  const [resourceActive, setResourceActive] = useState(false);
  const toggleActive = () => {
    setResourceActive(true);
  };



  return (
    <div className="header-fixed">
      <header>
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>

        <nav>
          <ul className="top-ul">
            <li>
              <Link to="/" className="nav-link" onClick={toggleHome}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className={
                  resourceActive ? "nav-link nav-link--active" : "nav-link"
                }
                onClick={toggleActive}
              >
                Resources
              </Link>
            </li>
          </ul>
          <div className="hamburger-icon" onClick={toggleMenu}></div>
        </nav>
        {/* --- hamburger menu --- */}
        {menuOpen && (
          <div ref={menuRef} className="sidepanel">
            <div className="sidepanel__header">
              <img src={logoMark} alt="logo"></img>
              <div
                ref={menuRef}
                className="sidepanel__close"
                onClick={toggleMenu}
              ></div>
            </div>
            <ul className="sidepanel__ul">
              <li onClick={toggleMenu}>
                <Link to="/" className="sidepanel-link">
                  Dashboard
                  <img src={chevronRight} alt="chevron"></img>
                </Link>
              </li>

              <li onClick={toggleMenu}>
                <Link to="/projects" className="sidepanel-link">
                  Projects
                  <img src={chevronRight} alt="chevron"></img>
                </Link>
              </li>

              <li onClick={toggleMenu}>
                <Link to="/invoices" className="sidepanel-link">
                  {" "}
                  Invoices
                  <img src={chevronRight} alt="chevron"></img>
                </Link>
              </li>

              <li onClick={toggleMenu}>
                <Link to="/resources" className="sidepanel-link">
                  Resources
                  <img src={chevronRight} alt="chevron"></img>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {menuOpen && <div className="overlay"></div>}
      </header>
    </div>
  );
};

export default Header;
