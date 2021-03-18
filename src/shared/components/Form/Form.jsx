import React from 'react';
import "./Form.scss";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


export function Form(props) {

    const submitForm = ($event) => {
        $event.preventDefault();
        const title = document.querySelector('#title').value;
        props.fnClickedSearch(title);

    }
    return (

        <FormControl >
            <InputLabel htmlFor="title"></InputLabel>
            <Input className="search"
                id="title"
                startAdornment={
                    <InputAdornment position="start">
                        <span className="b-icon b-icon--search1 icon-search-1"></span>
                    </InputAdornment>
                }
                onChange={submitForm}
            />
        </FormControl>

    );


    // className="form "
}