import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';





export function Footer() {


    return (

        <div className="footer">
            <Link to={"/characters/"}><a>PERSONAJES</a></Link>
            <Link to={"/houses/"}><a>CASAS</a></Link>
            <Link to={"/chronology/"}><a>CRONOLOGÍA</a></Link>
        </div>

    )
}
