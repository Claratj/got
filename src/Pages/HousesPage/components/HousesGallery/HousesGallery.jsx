import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Footer } from '../../../../core/components/Footer/Footer';
import { Header } from "../../../../core/components/Header/Header";


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

        <div className="gallery-container">
            <Header search={true} house={true} fnClickedSearch={searchHouse} fnLanguage={changeLanguage} />
            <div className="gallery" >
                {filterHouses
                    .filter(house => house.logoURL)
                    .map((house, i) =>
                        <div className="col-md-4 col-lg-2 col-xl-2 col-sm-4 col-6 App" key={i}>
                            <figure className="character-gallery">
                                <Link to={'/houses/' + house.name}>
                                    <img className="c-houses-gallery__img" src={house.logoURL} alt={house.name} />
                                </Link>
                            </figure>
                            <figcaption className="c-houses-gallery__figcaption">{house.name}</figcaption>
                        </div>

                    )}
            </div>
            <Footer />
        </div>
    );
}
