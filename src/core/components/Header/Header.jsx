import React from 'react';
import spainFlag from '../../../assets/img/spain.svg';
import ukFlag from '../../../assets/img/uk.svg';

export function Header() {
    return (
        <div>

            <div>
                <img src={spainFlag}/>
            </div>

            <div>
                <img src={ukFlag}/>
            </div>

        </div>
    )
}