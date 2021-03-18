import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.scss';





export function Footer() {

    const [t, i18n] = useTranslation(['translation']);


    return (

        <footer className="footer">
            <NavLink className="footer__link" activeClassName="footer__link--active" to={"/characters"}>{t('characters')}</NavLink>
            <NavLink className="footer__link" exact activeClassName="footer__link--active" to={"/houses"}>{t('houses')}</NavLink>
            <NavLink className="footer__link" activeClassName="footer__link--active" to={"/chronology"}>{t('chronology')}</NavLink>
        </footer>

    )
}
