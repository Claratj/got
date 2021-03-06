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

    const goTopreviousPath = () => {
        history.goBack()
    }

    return (

        <div className="c-header">

            {props.arrow &&
                <div className="c-header_back" onClick={goTopreviousPath}>
                    <span className="icon-Vector b-icon b-icon--arrow" ></span>
                    <p className=" b-icon b-icon--arrow--font">Volver</p>
                </div>
            }

            {props.search && <Form fnClickedSearch={props.fnClickedSearch} />}

            <div className="c-header-icons__home">

                {props.house &&
                    <div>
                        <span className="icon-home b-icon b-icon--house" onClick={() => history.push('/')}> </span>
                    </div>
                }
                <img className="flags" src={SpainFlag} alt="" onClick={() => spanishTranslate()} />
                <img className="flags__en" src={ukFlag} alt="" onClick={() => englishTranslate()} />


            </div>

        </div>

    )
}
