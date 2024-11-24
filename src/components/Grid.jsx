import React from 'react';
import './assets/General.css';

const Grid = ({children, columns}) => {
    return (
        <div 
            className="grid-container" 
            style={columns && {gridTemplateColumns: `repeat(${columns}, 1fr)`}}
        >
            {children}
        </div>
    );
};

export default Grid;