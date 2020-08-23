import React from 'react'
import Card from './Card';

export default function Candidates({ list }) {
    return (
        <div>
            {list.map((candidate) => {
                const { id, name, votes } = candidate;
                return (
                    <Card key={id}>{name} - {votes}</Card>
                );
            })}
        </div>
    )
}
