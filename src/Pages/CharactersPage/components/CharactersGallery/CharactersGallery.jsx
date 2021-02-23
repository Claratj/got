import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from '../../../../core/components/Header/Header';
import { useTranslation } from 'react-i18next';
import './CharactersGallery.scss';
import { Footer } from "../../../../core/components/Footer/Footer";



export function CharactersGallery(props) {
    const [FilterCharacters, setFilterCharacters] = useState([]);

    const [t, i18n] = useTranslation(['translation']);

    const changeLanguage = code => {
        i18n.changeLanguage(code);
        console.log(code);
    }

    const searchCharacter = (characterName) => {
        const findCharacter = props.characters.filter(character => {

            return character.name.toLowerCase().includes(characterName.toLocaleLowerCase());

        })
        setFilterCharacters(findCharacter);

    }

    const initialFilterCharacters = () => {

        setFilterCharacters(props.characters);
    }

    useEffect(initialFilterCharacters, [props.characters]);


    return (
        <div >
            <Header search={true} house={true} fnClickedSearch={searchCharacter} fnLanguage={changeLanguage} />
            <div className="d-block d-flex flex-wrap character-gallery__scroll ">
                {FilterCharacters
                    .filter(character => character.image)
                    .map((character, i) =>
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2 " style={{"padding": "0"}}>
                            <Link to={"/characters/" + character.name}>
                                <figure key={i} className="character-gallery" >
                                    <img className="character-gallery__img" src={character.image} alt={character.name} />
                                    <div className="character-gallery__figcaption"><p>{character.name}</p></div>
                                </figure>
                            </Link>
                        </div>
                    )};
            </div>
            <Footer />
        </div>

    );
}