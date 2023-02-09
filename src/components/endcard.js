import React from "react";

const EndCard = (props) =>{
    const {newGame,result} = props
    return (
    <div className="endCard">
    <h1>GAME OVER</h1>
    <p>{result}</p>
    <button onClick={newGame} className='newGame'>Start New Game</button>
    </div>
    )
}

export default EndCard