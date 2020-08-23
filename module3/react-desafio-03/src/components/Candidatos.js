import React from 'react'

export default function Candidatos({ list }) {
    return (
        <div>
            {list.map(({ id, name, votes }) => {
                return (
                    <p key={id}>{name} - {votes}</p>
                );
            })}
        </div>
    )
}
