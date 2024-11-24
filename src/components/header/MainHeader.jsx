import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./assets/styles/Header.css";

const Header = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(
        () => localStorage.getItem('theme') === 'dark'
    );
    
    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);
    
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <header className="header">
        <div className="theme-switch">
            <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? <FaSun className="icon sun" /> : <FaMoon className="icon moon" />}
            </button>
        </div>
        <nav className="nav">
            <ul className="nav-list">
            <li><a href="/">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <div className="cta-button">
            <a href="#hire-me" className="btn">Hire Me</a>
        </div>
        </header>
    );
};

export default Header;
