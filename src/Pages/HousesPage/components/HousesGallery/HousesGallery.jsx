import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Flags } from "../../../../core/components/Flags/Flags";
import { Form } from "../../../../shared/components/Form/Form";
import { useTranslation } from 'react-i18next';



import "./HouseGallery.scss"


export function HousesGallery(props) {

    const [filterHouses, setFilterHouses] = useState([]);
    const history = useHistory();
    const [t, i18n] = useTranslation(['translation']);

    const changeLanguage = code => {
        i18n.changeLanguage(code);
        console.log(code);
    }

    const searchHouse = (houseName) => {

        const findHouses = props.houses.filter(house => {

            return house.name.toLowerCase().includes(houseName.toLocaleLowerCase());
        })
        setFilterHouses(findHouses);
    }

    const initialFilterHouses = () => {

        setFilterHouses(props.houses)
    }

    useEffect(initialFilterHouses, [props.houses]);


    return (

        <div >
            <div className="d-flex justify-content-between search-container">
                <Form fnClickedSearch={searchHouse} />
                <div className="d-flex justify-content-between mr-5  ">
                    <span className="icon-home b-icon b-icon--house" onClick={() => history.push('/')} ></span>
                    <Flags fnLanguage={changeLanguage} />
                </div>

            </div>

            <div className="d-flex flex-wrap  c-houses-gallery__scroll" >

                {filterHouses
                    .filter(house => house.logoURL)
                    .map((house, i) =>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2 App" key={i}>
                            <figure className="c-houses-gallery__figure">
                                <Link to={'/houses/' + house.name}>
                                    <img className="c-houses-gallery__img" src={house.logoURL} alt={house.name} />
                                </Link>
                            </figure>
                            <figcaption className="c-houses-gallery__figcaption">{house.name}</figcaption>
                        </div>

                    )}

            </div>


        </div>
    );
}