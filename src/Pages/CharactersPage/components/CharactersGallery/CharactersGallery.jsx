import React from "react";
import { Link } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


export function CharactersGallery(props) {

    // const App = () => (
    //     <SimpleBar style={{ maxHeight: 300 }}>

    //     </SimpleBar>
    // );



    return (

        <div className="row">
            {/* <SimpleBar style={{ maxHeight: 300 }}> */}
            {props.characters.map((character, i) =>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Link to={"/characters/" + character.name}>
                        <figure key={i}>
                            <img src={character.image} alt={character.name} />
                        </figure>
                        <figcaption>{character.name}</figcaption>
                    </Link>
                </div>
            )};
            {/* </SimpleBar> */}
        </div>
    );
}