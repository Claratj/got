import React from 'react';
import spainFlag from '../../../assets/img/spain.svg';
import ukFlag from '../../../assets/img/uk.svg';

export function Header() {
    return (
        <nav>

            <li>
                <img src={spainFlag} alt='SP'/>
            </li>

            <li>
                <img src={ukFlag} alt='EN'/>
            </li>

        </nav>
    )
}