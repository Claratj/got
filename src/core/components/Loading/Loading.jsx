import React, { useContext } from 'react';
import { LoadingContext } from './contexts/LoadingContext';
import './Loading.scss';

export function Loading () {

    const {isLoading} = useContext(LoadingContext);

    return (

        // Si isLoading es true muestrame el html

        isLoading && <div className="c-loading">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}