import React, { useEffect, useState } from "react";
import { API } from "../../shared/consts/api.consts";
import { CharactersGallery } from "./components/CharactersGallery/CharactersGallery";



export function CharactersPage() {

    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {
        API.get("show/characters").then((res) => {
            setCharacters(res.data);
            console.log(res.data);
        });
    };

    useEffect(getCharacters, []);

    return (
        <div class="">
            <CharactersGallery characters={characters} />
        </div>
    );
}