import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import image from "../../Images/rickandmorty.png";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h3>Rick & Morty</h3>
            <img src={image} alt="rickandmorty" />
            <ul>
                <li>
                    <Link to="/">Episodes</Link>
                </li>
                <li>
                    <Link to="/characters">Characters</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
