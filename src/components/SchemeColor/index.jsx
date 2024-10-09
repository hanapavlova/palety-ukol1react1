import React from 'react';
import './style.css';

export const SchemeColor = ({color}) => (
        <div key={color} className="scheme-color" style={{ backgroundColor: color }}>{color}</div>
)