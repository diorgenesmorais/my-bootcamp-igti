import React from 'react'
import Card from './Card';
import Candidate from './Candidate';

export default function Candidates({ list }) {
    return (
        <div>
            {list.map((candidate) => {
                const { id } = candidate;
                return (
                    <Card key={id}>
                        <Candidate candidate={candidate} />
                    </Card>
                );
            })}
        </div>
    )
}
