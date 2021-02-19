import React from 'react';

const flecha = ({type, onClick, isEdge}) => {

    const backgroundColor = isEdge ? '#EEEEEE' : 'white'

    const style = {
        color: '#ec296b',
        fontSize: '2em',
        borderRadius: '100%',
        height: '2em',
        width: '2em',
        outline: 'none',
        backgroundColor: backgroundColor,
        border: 'none',
        margin: 'auto 1em',
        textAlign: 'center',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    }
    
    const pointer = (type === 'PREV') ? '‹' : '›';
    return (
        <button style={style} type="button" onClick={onClick} disabled={isEdge}>
            {pointer}
        </button>
    )
}

export default flecha;