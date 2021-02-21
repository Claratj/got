import React from 'react';
import { Header } from '../../core/components/Header/Header';
import background from '../../assets/img/background.svg';
import './Home.scss';
import { Footer } from '../../core/components/Footer/Footer';

export function HomePage() {

    return (
        <div className="c-home">
            <Header />
            <h1 className="c-home__title">GAME OF THRONES</h1>
            <img className="c-home__img" src={background} />
            <Footer />
        </div>
    );
}
