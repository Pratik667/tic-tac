import React, { useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function handleSelectSquare (rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) =>
    //         {const updateGameBoard = [...prevGameBoard.map(initialArray => [...initialArray])];
    //     updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //     return updateGameBoard;});
    //      onSelectSquare();
    // }
    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    return (<>
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    </>)
}