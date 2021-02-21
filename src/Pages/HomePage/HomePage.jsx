import React from 'react';
import { Header } from '../../core/components/Header/Header';
import { Footer } from '../../core/components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import './Home.scss';

export function HomePage() {
    const [t, i18n] = useTranslation(['translation']);

    const changeLanguage = code => {
        i18n.changeLanguage(code);
        console.log(code);
    }

    return (
        <div className="c-home">
            <div className="gallery-container">
                <Header fnLanguage={changeLanguage} />
                <div className="c-home__title-container">
                    <h1 className="c-home__title">{t('game of thrones')}</h1>
                </div>
                <Footer />
            </div>
        </div>
    );
}

