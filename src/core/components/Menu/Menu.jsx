import React from 'react';
import { NavLink } from 'react-router-dom';

export function Menu() {
    return (
        <nav>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/houses">Houses</NavLink>
            <NavLink to="/chronology">Chronology</NavLink>
        </nav>
    )
}