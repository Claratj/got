import React from 'react';
import SpainFlag from '../../../assets/img/spain.svg';
import ukFlag from '../../../assets/img/uk.svg';
import './Flags.scss'

export function Flags(){

    return(
        <div className= "d-flex" >
            <img className= "flags" src={SpainFlag} alt=""/>
            <img className= "flags" src={ukFlag} alt=""/>
        </div>
    )
}