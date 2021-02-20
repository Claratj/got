import React from 'react';
import { NavLink } from 'react-router-dom';

export function Menu() {
    return (

    <div className="c-menu">    
        <div className="c-menu-nav">
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/houses">Houses</NavLink>
            <NavLink to="/chronology">Chronology</NavLink>
        </div>
    </div>

    )
}