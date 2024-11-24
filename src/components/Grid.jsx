import React from 'react';
import './assets/General.css';

const Grid = ({children, columns}) => {
    return (
        <div className="grid-container">
            {children}
        </div>
    );
};

export default Grid;