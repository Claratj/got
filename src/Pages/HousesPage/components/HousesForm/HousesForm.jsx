import React from 'react';
import "./HousesForm.scss";

export function HousesForm(props){

    const submitForm = ($event) => {
        $event.preventDefault();
        const title = document.querySelector('#title').value;
        props.fnClickedSearch(title);

    }

    return(
        
        <form  className="form ">
        
            <span className="b-icon b-icon--search1 icon-search-1"></span>
            <label htmlFor="title"></label>
            <input className="search" onChange={submitForm} id="title" type="text" placeholder="Buscar..."/>
            

        </form>
    );
}