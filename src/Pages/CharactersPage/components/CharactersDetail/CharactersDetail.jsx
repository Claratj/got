import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from '../../../../shared/consts/api.consts';
import './CharacterDetail.scss';


export function CharactersDetail() {

    const { characterName } = useParams();

    const [character, setCharacter] = useState([]);
    const [house, setHouse] = useState([]);


    const getCharacterDetail = () => {
        API.get("show/characters/" + characterName).then((res) => {
            setCharacter(res.data);


            API.get("show/houses/" + res.data.house).then((res2) => {
                setHouse(res2.data[0]);
                // console.log(res2.data[0]);
            })
        });
    };

    const allegiances = character.allegiances;
    let listAllegiances = [];
    const appearances = character.appearances;
    let listAppearances = [];
    const siblings = character.siblings;
    let listSiblings = [];
    const titles = character.titles;
    let listTitles = [];

    if (allegiances != undefined) {

        listAllegiances = allegiances.map((allegiance) =>
            <li>{allegiance}</li>
        );
    }

    if (appearances != undefined) {
        listAppearances = appearances.map((appearance) =>
            <li>{appearance}</li>
        );
    }


    if (siblings != undefined) {
        listSiblings = siblings.map((sibling) =>
            <li>{sibling}</li>
        );
    }


    if (titles != undefined) {
        listTitles = titles.map((title) =>
            <li>{title}</li>
        );
    }

    useEffect(getCharacterDetail, []);

    return (
        <div>
            {character && <div>
                <figure>
                    <img className="img--Character--Detail" src={character.image} alt="" />
                    <figcaption>{character.name}</figcaption>
                </figure>
                <div className="row">
                    <div>
                        <h2>CASA</h2>
                        {house !== null &&<img src={house.logoURL} /> }
                    </div>
                    <div>
                        <h2>ALIANZAS</h2>
                        <ul>
                            {listAllegiances}
                        </ul>
                    </div>
                    <div>
                        <h2>APARICIONES</h2>
                        <ul>
                            {listAppearances}
                        </ul>
                    </div>
                    <div>
                        <h2>PADRE</h2>
                        <p>{character.father}</p>
                    </div>
                    <div>
                        <h2>DESCENDIENTES</h2>
                        <ul>
                            {listSiblings}
                        </ul>
                    </div>
                    <div>
                        <h2>TITULOS</h2>
                        <ul>
                            {listTitles}
                        </ul>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}