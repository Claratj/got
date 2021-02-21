import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { Flags } from "../../../../core/components/Flags/Flags";
// import { Form } from "../../../../shared/components/Form/Form";
import { Header } from '../../../../core/components/Header/Header';
import { useTranslation } from 'react-i18next';
import './CharactersGallery.scss';



export function CharactersGallery(props) {
    const [FilterCharacters, setFilterCharacters] = useState([]);

    const searchCharacter = (characterName) => {
        // console.log(characters);
        const findCharacter = props.characters.filter(character => {

            return character.name.toLowerCase().includes(characterName.toLocaleLowerCase());

        })
        setFilterCharacters(findCharacter);
        // if (findCharacter != '') {
        //     characters = findCharacter;
        // }

    }

    const initialFilterCharacters = () => {

        setFilterCharacters(props.characters);
    }

    useEffect(initialFilterCharacters, [props.characters]);


    return (
        <div className="gallery-container">
            <Header search={true} house={true} fnClickedSearch={searchCharacter} />
            <div className="gallery">
                {FilterCharacters
                    .filter(character => character.image)
                    .map((character, i) =>
                        <div className="col-12 col-sm-4 col-md-2 col-auto">
                            <Link to={"/characters/" + character.name}>
                                <figure key={i} className="character-gallery" >
                                    <img className="character-gallery__img" src={character.image} alt={character.name} />
                                    <div className="character-gallery__figcaption"><p>{character.name}</p></div>
                                </figure>
                            </Link>
                        </div>
                    )};


            {/* {props.findCharacter &&

                props.findCharacter.map((character, i) =>
                    <div className="col-12 col-sm-4 col-md-2 col-auto">
                        <Link to={"/characters/" + character.name}>
                            <figure key={i} className="character-gallery" >
                                <img className="character-gallery__img" src={character.image} alt={character.name} />
                                <div className="character-gallery__figcaption"><p>{character.name}</p></div>
                            </figure>
                        </Link>
                    </div>
                )}; */}


            </div>
        </div>

    );
}