import React from 'react';
import SpainFlag from '../../../assets/img/spain.svg';
import ukFlag from '../../../assets/img/uk.svg';
import './Flags.scss'

export function Flags(props) {

    function englishTranslate() {
        props.changeLanguage('en');
    }
    function spanishTranslate() {
        props.changeLanguage('es');
    }

    return (
        <div className="d-flex" >
            <img className="flags" src={SpainFlag} alt="" onClick={() => spanishTranslate()} />
            <img className="flags" src={ukFlag} alt="" onClick={() => englishTranslate()} />
        </div>
    )
}