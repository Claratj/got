import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.scss';





export function Footer() {
     
    const [t, i18n ] = useTranslation(['translation']);
    

    return (

        <div className="footer">
            <Link to={"/characters"}>{t('characters')}</Link>
            <Link to={"/houses"}>{t('houses')}</Link>
            <Link to={"/chronology"}>{t('chronology')}</Link>
        </div>

    )
}
