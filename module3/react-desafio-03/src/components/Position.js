import React from 'react'

const positionCss = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginRight: '10px'
};

export default function Position({ children }) {
    return (
        <span style={positionCss}>{ children }</span>
    )
}
