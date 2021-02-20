import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../../core/components/Loading/contexts/LoadingContext";
import { API } from "../../shared/consts/api.consts";
import { CharactersGallery } from "./components/CharactersGallery/CharactersGallery";
import "./CharactersPage.scss";
import { Header } from '../../core/components/Header/Header';
import { Footer } from '../../core/components/Footer/Footer';


export function CharactersPage() {

    const [characters, setCharacters] = useState([]);
    const [filterCharacters, setFilterCharacters] = useState([]);
    const { setIsLoading } = useContext(LoadingContext);


    const getCharacters = () => {
        setIsLoading(true);
        API.get("show/characters").then((res) => {
            setIsLoading(false);
            setCharacters(res.data);
        });
    };

    const searchCharacter = (characterName) => {

        const findCharacter = characters.filter(character => {

            return character.name.toLowerCase().includes(characterName.toLocaleLowerCase());
        })
        setFilterCharacters(findCharacter);
    }

    const initialFilterCharacters = () => {

        setFilterCharacters(characters);
    }

    useEffect(initialFilterCharacters, [characters]);




    useEffect(getCharacters, []);

    return (
        <div className="gallery-container">
            <Header search={true} house={true} fnClickedSearch={searchCharacter} />
            <CharactersGallery characters={characters} />
            <Footer />
        </div>
    );
}