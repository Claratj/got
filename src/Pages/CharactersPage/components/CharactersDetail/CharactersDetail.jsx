import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from '../../../../shared/consts/api.consts';


export function CharactersDetail() {

    const { characterName } = useParams();

    const [character, setCharacter] = useState([]);

    const getCharacterDetail = () => {
        API.get("/characters/" + characterName).then((res) => {
            setCharacter(res.data.character);
            console.log(res.data);
        });
    };

    useEffect(getCharacterDetail, []);

    return (
        <div>
            {/* {character && <figure>
                <img src={character.image} alt="" />
                <figcaption>{character.name}</figcaption>
                <p>{ }</p>
                <p>{ }</p>
                <p>{ }</p>
            </figure>} */}
        </div>
    );
}