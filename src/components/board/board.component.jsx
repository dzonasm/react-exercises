import React from 'react'
import Square from '../square/square.component'

const Board = ({ squares, onClick }) => {
    return (
        <div className='board'>
            {squares.map((square, i) => (
                <Square key={i} content={square} onClick={() => onClick(i)}></Square>
            )
            )}
        </div>
    )
}

export default Board;