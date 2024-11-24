import React from 'react';
import Button from '../Button';

const Card = ({
    title,
    description,
    image,
    techs,
    button,
    buttonAction,
    buttonProps,
    children,
    addStyles
}) => {
    return (
        <div className="card" style={addStyles}>
            { image && <img src={image} alt={title} /> }
            {title && <h2>{title}</h2>}
            {children}
            {description && <p>{description}</p>}
            { techs && 
                <div className='card-techs-container'>
                    {techs.map((tech, index) => <span key={index}>{tech}</span>)}
                </div>
            }
            { button && <Button text={'Inspect'} onClick={buttonAction} {...buttonProps} /> }
        </div>
    );
}

export default Card;
