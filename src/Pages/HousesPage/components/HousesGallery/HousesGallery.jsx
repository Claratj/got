import React from "react";
import { Link } from "react-router-dom";


export function HousesGallery(props){
    return(
        <div>
            <div className="row">
            {props.houses.map((house,i) =>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <figure key={i}>
                    <Link to= {'/houses/'+ house.name}>
                        <img src={house.logoURL} alt={house.name}/>
                    </Link>
                    </figure>
                    <figcaption>{house.name}</figcaption>
                </div>
            
            )}


            </div>
        </div>
    );
}