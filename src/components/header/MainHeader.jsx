import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "./assets/styles/Header.css";

const Header = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [isDarkTheme, setIsDarkTheme] = useState(
        () => localStorage.getItem("theme") === "dark"
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme);
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

    useEffect(() => {
        const handleRouteChange = () => {
            setCurrentPath(window.location.pathname);
            setIsMenuOpen(false);
        };

        window.addEventListener("popstate", handleRouteChange);

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };
    }, [currentPath]);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prevMenu) => !prevMenu);
    };

    return (
        <header className="header">
        {/* Theme Switch */}
        <div className="theme-switch">
            <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? <FaSun className="icon sun" /> : <FaMoon className="icon moon" />}
            </button>
        </div>

        {/* Hamburger Icon */}
        <button className="hamburger" onClick={toggleMenu}>
            <FaBars className="icon" />
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-list">
            <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li>
                <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            </li>
            <li>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </li>
            </ul>
        </nav>

        {/* CTA Button */}
        <div className="cta-button">
            <a href="#hire-me" className="btn">
            Hire Me
            </a>
        </div>
        </header>
  );
};

export default Header;