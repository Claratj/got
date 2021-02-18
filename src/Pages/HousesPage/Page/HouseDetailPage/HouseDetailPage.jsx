import React, {useContext, useEffect,useState} from 'react';
import { API } from '../../../../shared/consts/api.consts';
import {useHistory,useParams} from "react-router-dom";
import { Flags } from "../../../../core/components/Flags/Flags";
import "./HouseDetailPage.scss"
import { LoadingContext } from '../../../../core/components/Loading/contexts/LoadingContext';
import { useTranslation } from 'react-i18next';




export function HouseDetailPage(){

    const [t, i18n ] = useTranslation(['translation']);

    const changeLanguage = code => {
        i18n.changeLanguage(code);
        console.log(code);
    }

    const [house,setHouse] = useState(null);
    const {houseName} = useParams();
    const history = useHistory();
    const {setIsLoading} = useContext(LoadingContext)

    const getHouse = () => {
        setIsLoading(true);
        API.get("show/houses/" + houseName).then((res) => {
            setIsLoading(false);
            setHouse(res.data[0]);
            console.log(res.data[0])
        })
    }

    useEffect(getHouse,[]);

    let fundationDate ="";
    if(house !== null){
        console.log(house);
        fundationDate = new Date(house.createdAt).toLocaleDateString();
        console.log(fundationDate);
    }

    return(
        <div style={{width:'100%'}}>
            <div className="d-flex justify-content-between">
                <div className="d-flex " onClick={() => history.push('/houses')}>
                    <span className="icon-Vector b-icon b-icon--arrow" ></span>
                    <p className=" b-icon b-icon--arrow--font">Volver</p>
                </div>
                
                
                
                <div className="d-flex justify-content-between   ">
                    <span className="icon-home b-icon b-icon--house" onClick={() => history.push('/')} ></span>
                    <Flags fnLanguage={changeLanguage} />
                </div>
            </div>

            <div>
                {house && <figure className="c-houses-detail__figure">
                    <div className="d-flex align-items-center flex-column">
                        <img className="c-houses-detail__img"  src={house.logoURL} alt={house.name}/>
                        <figcaption className="c-houses-detail__figcaption" >{house.name}</figcaption>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                        <div >
                            <h3 className="c-houses-detail__th">{t('words')}</h3>
                            <p className="c-houses-detail__td">{house.words}</p>
                        </div>
                        <div  >
                            <h3 className="c-houses-detail__th">{t('seat')}</h3>
                            
                            <ul className="c-houses-detail__td">
                                {house.seat.map((seat,i) => {
                                    return (
                                        <li className="c-houses-detail__li" key={i}>{seat}</li>
                                    )
                                })}
                            </ul>
                            
                        </div>
                        <div >
                            <h3 className="c-houses-detail__th">{t('region')}</h3>
                            
                            <ul className="c-houses-detail__td">
                                {house.region.map((region,i)=>{
                                return(
                                    <li className="c-houses-detail__li" key={i}>{region}</li>
                                )
                                })}
                            </ul>
                            
                        </div>
                        <div >
                            <h3 className="c-houses-detail__th">{t('allegiance')}</h3>
                            
                            <ul className="c-houses-detail__td">
                                {house.allegiance.map((aliado,i) => {
                                    return (
                                        <li className="c-houses-detail__li" key={i}>{aliado}</li>
                                    )
                                })}
                            </ul>
                            
                        </div>
                        <div >
                            <h3 className="c-houses-detail__th">{t('religion')}</h3>
                           
                            <ul className="c-houses-detail__td">
                            {house.religion.map((religion,i) => {
                                return(
                                    <li className="c-houses-detail__li" key={i}>{religion}</li>
                                )
                            })}
                            </ul>
                            
                        </div>
                        <div >
                            <h3 className="c-houses-detail__th">{t('fundation')}</h3>
                            <p className="c-houses-detail__td">{fundationDate}</p>
                        </div>
                    </div>
                    {/* <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col" className="c-houses-detail__th">LEMA</th>
                                <th scope="col" className="c-houses-detail__th">SEDE</th>
                                <th scope="col" className="c-houses-detail__th">REGION</th>
                                <th scope="col" className="c-houses-detail__th">ALIANZAS</th>
                                <th scope="col" className="c-houses-detail__th">RELIGIONES</th>
                                <th scope="col" className="c-houses-detail__th">FUNDACION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="c-houses-detail__td">{house.words}</td>
                                <td className="c-houses-detail__td">{house.seat}</td>
                                <td className="c-houses-detail__td">{house.region}</td>
                                <td className="c-houses-detail__td ">{house.allegiance}</td>
                                <td className="c-houses-detail__td">{house.religion}</td>
                                <td className="c-houses-detail__td">{house.createdAt}</td>
                            </tr>
                        </tbody>
                    </table> */}
                
                    
                </figure>}
            </div>

        </div>
        
    );
}