import React from 'react';
import { Header } from '../../core/components/Header/Header';
import { Menu } from '../../core/components/Menu/Menu';
import background from '../../assets/img/background.svg';
import './Home.scss';

export function HomePage(){

    return(
        <div className="c-home">
            <Header></Header>
            <h1 className="c-home__title">GAME OF THRONES</h1>
            <img className="c-home__img" src={background}/>
            <Menu></Menu>
        </div>
    );
}