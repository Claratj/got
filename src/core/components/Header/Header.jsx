import React from 'react';
import './Header.scss';
import { useHistory } from 'react-router-dom';
import SpainFlag from '../../../assets/img/spain.svg';
import ukFlag from '../../../assets/img/uk.svg';
import { Form } from '../../../shared/components/Form/Form';




export function Header(props) {

    const history = useHistory();

    function englishTranslate() {
        props.fnLanguage('en');
    }
    function spanishTranslate() {
        props.fnLanguage('es');
    }

    return (

        <div className="c-header col-11">

            {props.arrow &&
                <div className="" onClick={props.houseDetail ? () => history.push('/houses') : () => history.push('/characters')}>
                    <span className="icon-Vector b-icon b-icon--arrow" ></span>
                    <p className=" b-icon b-icon--arrow--font">Volver</p>
                </div>
            }


            {props.search && <Form fnClickedSearch={props.fnClickedSearch} />}
            <div className="c-header-icons col-4 d-flex flex-row justify-content-end align-items-center">

                {props.house &&
                    <div className="c-header-icons__home">
                        <span className="icon-home b-icon b-icon--house" onClick={() => history.push('/')}> </span>
                    </div>
                }

                <div className="d-flex" >
                    <img className="flags" src={SpainFlag} alt="" onClick={() => spanishTranslate()} />
                    <img className="flags" src={ukFlag} alt="" onClick={() => englishTranslate()} />
                </div>

            </div>

        </div>

    )
}
