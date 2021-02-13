import React from "react";
import { Link } from "react-router-dom";



export function CharactersGallery(props) {
    return (

        <div className="row">
            {props.characters.map((character, i) =>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Link to={"/characters/" + character.name}>
                        <figure key={i}>
                            <img src={character.image} alt={character.name} />
                        </figure>
                        <figcaption>{character.name}</figcaption>
                    </Link>
                </div>

            )}

        </div>

    );
}