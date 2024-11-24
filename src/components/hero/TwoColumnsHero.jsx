import React from "react";
import ColumnImage from './assets/images/web2-column-image.webp';
import './assets/styles/Hero.css';

const TwoColumnsHero = ({
    title = 'default title',
    subtitle = 'default subtitle',
    image= ColumnImage,
    imageAlt= 'sebastian-escobar-banner'
}) => {
    return (
        <section className="two-columns-hero">
            <div className="two-columns-hero__content">
                <h1 className="two-columns-hero__title">{title}</h1>
                <p className="two-columns-hero__subtitle">{subtitle}</p>
            </div>
            <div className="two-columns-hero__image">
                <img src={image} alt={imageAlt} preload="true" />
            </div>
        </section>
    )
}

export default TwoColumnsHero;