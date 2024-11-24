import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import "./assets/styles/Header.css";

const Header = () => {
    const navItems = [
        { name: "About", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    const [isDarkTheme, setIsDarkTheme] = useState(() => localStorage.getItem("theme") === "dark");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // Apply theme changes to the body
        document.body.classList.toggle("dark-theme", isDarkTheme);
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    }, [isDarkTheme]);

    useEffect(() => {
        const handleRouteChange = () => {
            setCurrentPath(window.location.pathname);
            setIsMenuOpen(false);
        };

        // Listen for URL changes
        window.addEventListener("popstate", handleRouteChange);

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };
    }, []);

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
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={currentPath === item.path ? "active" : ""}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* CTA Button */}
            <div className="cta-button">
                <a href="/contact" className="btn">
                    Hire Me
                </a>
            </div>
        </header>
    );
};

export default Header;