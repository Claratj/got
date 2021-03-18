import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { API } from '../../../../shared/consts/api.consts';
import { Header } from '../../../../core/components/Header/Header';
import './CharacterDetail.scss';
import { useTranslation } from 'react-i18next';
import { LoadingContext } from '../../../../core/components/Loading/contexts/LoadingContext';


export function CharactersDetail() {

    const [t, i18n] = useTranslation(['translation']);

    const changeLanguage = code => {
        i18n.changeLanguage(code);
        console.log(code);
    }

    const { characterName } = useParams();
    const [character, setCharacter] = useState([]);
    const [house, setHouse] = useState([]);
    const { setIsLoading } = useContext(LoadingContext);


    const getCharacterDetail = () => {
        setIsLoading(true);
        API.get("show/characters/" + characterName).then((res) => {
            setCharacter(res.data);


            API.get("show/houses/" + res.data.house).then((res2) => {
                setIsLoading(false);
                setHouse(res2.data[0]);
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
        <div className="gallery-detail">
            <Header house={true} arrow={'/characters'} fnLanguage={changeLanguage} />
            <div className="d-flex justify-content-center align-items-center">
                {character && <figure>
                    <div className="gallery-detail_pic">
                        <img className="c-houses-detail__img" src={character.image} alt="" />
                        <figcaption className="c-houses-detail__figcaption">{character.name}</figcaption>
                    </div>
                    <div className="gallery-detail_table">
                        <div className="c-houses-detail__col">
                            <h3 className="c-houses-detail__th">{t('house')}</h3>
                            {house !== null && <figure className="c-houses-detail__figure">
                                <Link to={"/houses/" + house.name}>
                                    <img className="c-houses-detail__hs" src={house.logoURL} />
                                </Link>
                            </figure>}
                        </div>
                        <div className="c-houses-detail__col">
                            <h3 className="c-houses-detail__th">{t('allegiances')}</h3>
                            <ul className="box c-houses-detail__td">
                                {listAllegiances}
                            </ul>
                        </div>
                        <div className="c-houses-detail__col c-houses-detail__scroll">
                            <h3 className="c-houses-detail__th">{t('appearances')}</h3>
                            <ul className="box c-houses-detail__td">
                                {listAppearances}
                            </ul>
                        </div>
                        <div className="c-houses-detail__col">
                            <h3 className="c-houses-detail__th">{t('father')}</h3>
                            <p className="c-houses-detail__td">{character.father}</p>
                        </div>
                        <div className="c-houses-detail__col">
                            <h3 className="c-houses-detail__th">{t('siblings')}</h3>
                            <ul className="box c-houses-detail__td">
                                {listSiblings}
                            </ul>
                        </div>
                        <div className="c-houses-detail__col">
                            <h3 className="c-houses-detail__th">{t('titles')}</h3>
                            <ul className="box c-houses-detail__td">
                                {listTitles}
                            </ul>
                        </div>
                    </div>
                </figure>
                }
            </div>
        </div>
    );
}