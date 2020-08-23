import React from 'react'
import Position from './Position';
import Picture from './Picture';
import css from './candidate.module.css';
import Info from './Info';
import Name from './Name';
import Votes from './Votes';
import Percentage from './Percentage';
import Popularity from './Popularity';
import { format, percentageFormatter } from './helpers/formatter';

export default function Candidate({ candidate, position }) {
    const { id, name, votes, percentage, popularity } = candidate;
    const imageSource = `img/${id}.jpg`;
    return (
        <div className={css.candidate}>
            <Position>{ position }</Position>
            <Picture imageSource={imageSource} description={name} />
            <Info>
                <Name name={name} />
                <Votes votes={format(votes)} />
                <Percentage percentage={percentageFormatter(percentage)} />
                <Popularity value={popularity} />
            </Info>
        </div>
    )
}
