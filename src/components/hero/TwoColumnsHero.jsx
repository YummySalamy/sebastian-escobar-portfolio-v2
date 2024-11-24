import React from "react";
import './assets/styles/Hero.css';

const TwoColumnsHero = ({
    title = 'default title',
    subtitle = 'default subtitle',
    image= 'https://4kwallpapers.com/images/wallpapers/macos-monterey-stock-black-dark-mode-layers-5k-3840x2160-5889.jpg',
    imageAlt= 'alt image'
}) => {
    return (
        <section className="two-columns-hero">
            <div className="two-columns-hero__content">
                <h1 className="two-columns-hero__title">{title}</h1>
                <p className="two-columns-hero__subtitle">{subtitle}</p>
            </div>
            <div className="two-columns-hero__image">
                <img src={image} alt={imageAlt} />
            </div>
        </section>
    )
}

export default TwoColumnsHero;