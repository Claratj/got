import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from '../../../../shared/consts/api.consts';
import './CharacterDetail.scss';
// import '../../../../index.scss'

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

        listAllegiances = allegiances.map((allegiance, i) =>
            <li key={i}>{allegiance}</li>
        );
    }

    if (appearances != undefined) {
        listAppearances = appearances.map((appearance, i) =>
            <li key={i}>{appearance}</li>
        );
    }


    if (siblings != undefined) {
        listSiblings = siblings.map((sibling, i) =>
            <li key={i}>{sibling}</li>
        );
    }


    if (titles != undefined) {
        listTitles = titles.map((title, i) =>
            <li key={i}>{title}</li>
        );
    }

    useEffect(getCharacterDetail, []);

    return (
        <div>
            {character && <div className="d-flex align-items-center flex-column" >
                <figure className="c-houses-detail__figure">
                    <img className="c-houses-detail__img" src={character.image} alt="" />
                    <figcaption className="c-houses-detail__figcaption">{character.name}</figcaption>
                </figure>
                <div className="row">
                    <div className="col-2">
                        <h3 className="c-houses-detail__th">CASA</h3>
                        {house !== null && <figure className="c-houses-detail__figure">
                            <img className="c-houses-detail__hs" src={house.logoURL} />
                        </figure>}
                    </div>
                    <div className="col-2">
                        <h3 className="c-houses-detail__th">ALIANZAS</h3>
                        <ul className="box c-houses-detail__td">
                            {listAllegiances}
                        </ul>
                    </div>
                    <div className="col-2 c-houses-detail__scroll">
                        <h3 className="c-houses-detail__th">APARICIONES</h3>
                        <ul className="box c-houses-detail__td">
                            {listAppearances}
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3 className="c-houses-detail__th">PADRE</h3>
                        <p className="c-houses-detail__td">{character.father}</p>
                    </div>
                    <div className="col-2">
                        <h3 className="c-houses-detail__th">DESCENDIENTES</h3>
                        <ul className="box c-houses-detail__td">
                            {listSiblings}
                        </ul>
                    </div>
                    <div className="col-2">
                        <h3 className="c-houses-detail__th">TITULOS</h3>
                        <ul className="box c-houses-detail__td">
                            {listTitles}
                        </ul>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}