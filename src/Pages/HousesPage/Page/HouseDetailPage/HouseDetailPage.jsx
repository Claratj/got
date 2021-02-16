import React, {useEffect,useState} from 'react';
import { API } from '../../../../shared/consts/api.consts';
import {useHistory,useLocation,useParams,useRouteMatch} from "react-router-dom";
import "./HouseDetailPage.scss"



export function HouseDetailPage(){

    const [house,setHouse] = useState(null);
    const {houseName} = useParams();
    const history = useHistory();

    const getHouse = () => {
        API.get("show/houses/" + houseName).then((res) => {
            setHouse(res.data[0]);
            console.log(res.data[0])
        })
    }

    useEffect(getHouse,[]);



    return(
        <div style={{width:'100%'}}>
            <div className="d-flex justify-content-between">
                <div className="d-flex " onClick={() => history.push('/houses')}>
                    <span className="icon-Vector b-icon b-icon--arrow" ></span>
                    <p className=" b-icon b-icon--arrow--font">Volver</p>
                </div>
                

                <span className="icon-home b-icon b-icon--house" onClick={() => history.push('/')} ></span>
            </div>

            <div>
                {house && <figure className="c-houses-detail__figure">
                    <div className="d-flex align-items-center flex-column">
                        <img className="c-houses-detail__img"  src={house.logoURL} alt={house.name}/>
                        <figcaption className="c-houses-detail__figcaption" >{house.name}</figcaption>
                    </div>
                    <div className="d-flex  ">
                        <div className="col-2">
                            <h3 className="c-houses-detail__th">LEMA</h3>
                            <p className="c-houses-detail__td">{house.words}</p>
                        </div>
                        <div className="col-2" >
                            <h3 className="c-houses-detail__th">SEDE</h3>
                            <p className="c-houses-detail__td">{house.seat}</p>
                        </div>
                        <div className="col-2">
                            <h3 className="c-houses-detail__th">REGION</h3>
                            <p className="c-houses-detail__td">{house.region}</p>
                        </div>
                        <div className="col-2">
                            <h3 className="c-houses-detail__th">ALIANZAS</h3>
                            <p className="c-houses-detail__td">{house.allegiance}</p>
                        </div>
                        <div className="col-2">
                            <h3 className="c-houses-detail__th">RELIGIONES</h3>
                            <p className="c-houses-detail__td">{house.religion}</p>
                        </div>
                        <div className="col-2">
                            <h3 className="c-houses-detail__th">FUNDACION</h3>
                            <p className="c-houses-detail__td">{house.createdAt}</p>
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