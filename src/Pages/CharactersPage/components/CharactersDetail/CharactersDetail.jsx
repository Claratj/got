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

    const allegiances = character.allegiances;

    const listAllegiances = [];

    for (const [i, allegiance] of products.entries()) {
        list.push(<li>{product}</li>)
    }

    return (
        <div>
            <h1>Pagina detalles</h1>
            {character && <div>
                <figure>
                    <img src={character.image} alt="" />
                    <figcaption>{character.name}</figcaption>
                </figure>
                <div>
                    <div>
                        <h2>CASA</h2>

                    </div>
                    <div>
                        <h2>ALIANZAS</h2>
                        <ul>{ }</ul>
                    </div>
                    <div>
                        <h2>APARICIONES</h2>
                    </div>
                    <div>
                        <h2>PADRE</h2>
                    </div>
                    <div>
                        <h2>DESCENDIENTES</h2>
                    </div>
                    <div>
                        <h2>TITULOS</h2>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}