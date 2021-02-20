import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../../core/components/Loading/contexts/LoadingContext";
import { API } from "../../shared/consts/api.consts";
import { CharactersGallery } from "./components/CharactersGallery/CharactersGallery";
import "./CharactersPage.scss";
import { Header } from '../../core/components/Header/Header';


export function CharactersPage() {

    const [characters, setCharacters] = useState([]);
    const { setIsLoading } = useContext(LoadingContext);


    const getCharacters = () => {
        setIsLoading(true);
        API.get("show/characters").then((res) => {
            setIsLoading(false);
            setCharacters(res.data);
        });
    };

    useEffect(getCharacters, []);

    return (
        <div className="">
            <Header search={true} house={true} />
            <CharactersGallery characters={characters} />
        </div>
    );
}