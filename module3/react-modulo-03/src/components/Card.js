import React from 'react'

export default function Card() {
    const styles = {
        width: '120px',
        padding: '5px'
    }

    return (
        <div className="card" style={styles}>
            R$ 1000,00<br />
            R$ 5,00<br />
            0,50%
        </div>
    )
}
