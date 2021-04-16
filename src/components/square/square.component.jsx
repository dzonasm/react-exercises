import React from 'react';

const Square = ({ content, onClick }) => {
    return (
        <button className='square' onClick={() => onClick()}>
            {content}
        </button>
    );
}

export default Square;