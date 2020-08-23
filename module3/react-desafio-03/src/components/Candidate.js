import React from 'react'
import Position from './Position';
import Picture from './Picture';
import css from './candidate.module.css';

export default function Candidate({ candidate, position }) {
    const { id, name, votes } = candidate;
    const imageSource = `img/${id}.jpg`;
    return (
        <div className={css.candidate}>
            <Position>{ position }</Position>
            <Picture imageSource={imageSource} description={name} />
            <div>
                { name } - { votes }
            </div>
        </div>
    )
}
