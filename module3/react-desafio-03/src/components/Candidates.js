import React from 'react'

export default function Candidates({ list }) {
    return (
        <div>
            {list.map((candidate) => {
                const { id, name, votes } = candidate;
                return (
                    <p key={id}>{name} - {votes}</p>
                );
            })}
        </div>
    )
}
