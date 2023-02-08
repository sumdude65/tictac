import React from "react";

const EndCard = (props) =>{
    const {newGame,result} = props
    return (
    <>
    <h1>Game is over</h1>
    <p>{result}</p>
    <button onClick={newGame}>Start New Game</button>
    </>
    )
}

export default EndCard