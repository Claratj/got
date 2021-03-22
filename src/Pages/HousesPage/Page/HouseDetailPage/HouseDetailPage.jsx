import React, { useContext, useEffect, useState } from 'react';
import { API } from '../../../../shared/consts/api.consts';
import { useHistory, useParams } from "react-router-dom";
import { LoadingContext } from '../../../../core/components/Loading/contexts/LoadingContext';
import { useTranslation } from 'react-i18next';
import { Header } from '../../../../core/components/Header/Header';




export function HouseDetailPage() {

    const [t, i18n] = useTranslation(['translation']);

    const changeLanguage = code => {
        i18n.changeLanguage(code);
        console.log(code);
    }

    const [house, setHouse] = useState(null);
    const { houseName } = useParams();
    const history = useHistory();
    const { setIsLoading } = useContext(LoadingContext)

    const getHouse = () => {
        setIsLoading(true);
        API.get("show/houses/" + houseName).then((res) => {
            setIsLoading(false);
            setHouse(res.data[0]);
            console.log(res.data[0])
        })
    }

    useEffect(getHouse, []);

    let fundationDate = "";
    if (house !== null) {
        console.log(house);
        fundationDate = new Date(house.createdAt).toLocaleDateString();
        console.log(fundationDate);
    }

    return (
        <div className="gallery-detail">
            <Header arrow={true} house={true} houseDetail={true} fnLanguage={changeLanguage} />
            <div className="d-flex justify-content-center align-items-center">
                {house && <figure>
                    <div className="gallery-detail_pic">
                        <img className="c-houses-detail__img" src={house.logoURL} alt={house.name} />
                        <figcaption className="c-houses-detail__figcaption" >{house.name}</figcaption>
                    </div>
                    <div className="gallery-detail_table">
                        <div className="c-houses-detail__col" >
                            <h3 className="c-houses-detail__th">{t('words')}</h3>
                            <p className="c-houses-detail__td">{house.words}</p>
                        </div>
                        <div className="c-houses-detail__col" >
                            <h3 className="c-houses-detail__th">{t('seat')}</h3>

                            <ul className="c-houses-detail__td">
                                {house.seat.map((seat, i) => {
                                    return (
                                        <li key={i}>{seat}</li>
                                    )
                                })}
                            </ul>

                        </div>
                        <div className="c-houses-detail__col" >
                            <h3 className="c-houses-detail__th">{t('region')}</h3>

                            <ul className="c-houses-detail__td">
                                {house.region.map((region, i) => {
                                    return (
                                        <li key={i}>{region}</li>
                                    )
                                })}
                            </ul>

                        </div>
                        <div className="c-houses-detail__col">
                            <h3 className="c-houses-detail__th">{t('allegiance')}</h3>

                            <ul className="c-houses-detail__td">
                                {house.allegiance.map((aliado, i) => {
                                    return (
                                        <li key={i}>{aliado}</li>
                                    )
                                })}
                            </ul>

                        </div>
                        <div className="c-houses-detail__col" >
                            <h3 className="c-houses-detail__th">{t('religion')}</h3>

                            <ul className="c-houses-detail__td">
                                {house.religion.map((religion, i) => {
                                    return (
                                        <li key={i}>{religion}</li>
                                    )
                                })}
                            </ul>

                        </div>
                        <div className="c-houses-detail__col" >
                            <h3 className="c-houses-detail__th">{t('fundation')}</h3>
                            <p className="c-houses-detail__td">{fundationDate}</p>
                        </div>
                    </div>

                </figure>}
            </div>

        </div>

    );
}

