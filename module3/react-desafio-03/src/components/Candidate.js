import React from 'react'
import Position from './Position';
import Picture from './Picture';
import css from './candidate.module.css';
import Info from './Info';
import Name from './Name';
import Votes from './Votes';

export default function Candidate({ candidate, position }) {
    const { id, name, votes } = candidate;
    const imageSource = `img/${id}.jpg`;
    return (
        <div className={css.candidate}>
            <Position>{ position }</Position>
            <Picture imageSource={imageSource} description={name} />
            <Info>
                <Name name={name} />
                <Votes votes={votes} />
            </Info>
        </div>
    )
}
