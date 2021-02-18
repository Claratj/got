import React from 'react';
import spainFlag from '../../../assets/img/spain.svg';
import ukFlag from '../../../assets/img/uk.svg';
import './Header.scss';
import { useHistory } from 'react-router-dom';




export function Header() {

    const history=useHistory();

    return (

    <div className="c-header col-11"> 

        <div className="c-header-icons col-4 d-flex flex-row justify-content-end align-items-center">

            <div className="c-header-icons__home">
                <span className="icon-home b-icon b-icon--house" onClick={() => history.push('/')}> </span>
            </div>

            <div className="c-header-icons__flag">
                <img src={spainFlag}/>
            </div>

            <div className="c-header-icons__flag">
                <img src={ukFlag}/>
            </div>

        </div>

    </div>

    )
}