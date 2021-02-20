import React from "react";
import { Link } from "react-router-dom";
import './CharactersGallery.scss';



export function CharactersGallery(props) {

    return (
        <div className="gallery">
            {props.characters.map((character, i) =>
                <div className="col-12 col-sm-4 col-md-2 col-auto">
                    <Link to={"/characters/" + character.name}>
                        <figure key={i} className="character-gallery" >
                            <img className="character-gallery__img" src={character.image} alt={character.name} />
                            <figcaption className="character-gallery__figcaption">{character.name}</figcaption>
                        </figure>
                    </Link>
                </div>
            )};
        </div>
    );
}