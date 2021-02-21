import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';



import "./HouseGallery.scss"
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
            {/* <div className="d-flex justify-content-between search-container">
                <Form fnClickedSearch={searchHouse}/>
                <div className="d-flex justify-content-between mr-5  ">
                    <span className="icon-home b-icon b-icon--house" onClick={() => history.push('/')} ></span>
                    <Flags fnLanguage={changeLanguage}/>
                </div>
                
            </div> */}
            <Header search={true} house={true} fnClickedSearch={searchHouse} fnLanguage={changeLanguage} />

            <div className="gallery" >
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
