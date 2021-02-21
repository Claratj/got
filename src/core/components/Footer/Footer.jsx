import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';





export function Footer() {


    return (

        <div className="footer">
            <Link to={"/characters"}>PERSONAJES</Link>
            <Link to={"/houses"}>CASAS</Link>
            <Link to={"/chronology"}>CRONOLOGÍA</Link>
        </div>

    )
}
