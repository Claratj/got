import React from 'react';
import { Header } from '../../core/components/Header/Header';
import { Footer } from '../../core/components/Footer/Footer';
import './Home.scss';

export function HomePage(){

    return(
        <div className="c-home">
            <Header></Header>
            <h1 className="c-home__title">GAME OF THRONES</h1>
            <Footer></Footer>
        </div>
    );
}