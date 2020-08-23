import React from 'react'
import Position from './Position';
import Picture from './Picture';

export default function Candidate({ candidate, position }) {
    const { id, name, votes } = candidate;
    const imageSource = `img/${id}.jpg`;
    return (
        <>
            <Position>{ position }</Position>
            <Picture imageSource={imageSource} description={name} />
            <div>
                { name } - { votes }
            </div>
        </>
    )
}
