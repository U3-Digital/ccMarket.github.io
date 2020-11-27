import React from 'react';

const flecha = ({type, onClick, isEdge}) => {

    const style = {
        color: '#ec296b',
        fontSize: '2em',
        borderRadius: '100%',
        height: '1.6em',
        width: '2em',
        outline: 'none',
        backgroundColor: 'white',
        border: 'none',
        margin: 'auto 1em',
        padding: '0px',
        textAlign: 'center',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)'

    }
    
    const pointer = (type === 'PREV') ? '‹' : '›';
    return (
        <button style={style} type="button" onClick={onClick} disabled={isEdge}>
            {pointer}
        </button>
    )
}

export default flecha;