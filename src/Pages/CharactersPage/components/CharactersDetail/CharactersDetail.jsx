import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from '../../../../shared/consts/api.consts';


export function CharactersDetail() {

    const { characterName } = useParams();

    const [character, setCharacter] = useState([]);

    const getCharacterDetail = () => {
        API.get("show/characters/" + characterName).then((res) => {
            setCharacter(res.data);
            console.log(res.data);
        });
    };

    useEffect(getCharacterDetail, []);

    return (
        <div>
            <h1>Pagina detalles</h1>
            {character && <figure>
                <img src={character.image} alt="" />
                <figcaption>{character.name}</figcaption>
            </figure>}
        </div>
    );
}