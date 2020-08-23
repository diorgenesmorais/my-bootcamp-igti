import React from 'react'

export default function Preloader(props) {
    const spinnder = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    }

    return (
        <div style={spinnder}>
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
                </div>
            </div>
            <span style={{fontSize: '1.5rem', marginLeft: '10px'}}>Carregando...</span>
        </div>
    )
}
