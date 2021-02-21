import React from 'react';
import { Header } from '../../core/components/Header/Header';
import { Footer } from '../../core/components/Footer/Footer';
import './Home.scss';

export function HomePage() {

    return (
        <div className="c-home">
            <div className="gallery-container">
                <Header></Header>
                <div className="c-home__title-container">
                    <h1 className="c-home__title">GAME OF <br />THRONES</h1>
                </div>
                <Footer></Footer>
            </div>
        </div >
    );
}

