import React,{useReducer,useEffect} from "react";
import Box from "./box";
import EndCard from "./endcard";
import boardReducer from '../reducers/boardReducer'


const state = {
    gameBoard: Array(9).fill(''),
    playerOne:true,
    isEnded:false,
    result:''
}


const Board = () => {
    const [game,dispatch] = useReducer(boardReducer,state)

    function checkWinner (){
        const previousPlayer = !game.playerOne
        let winner = ''
        const winCondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        //logic for win condition
        if (previousPlayer === false){
            winner = 'X'
        }
        else {
            winner = 'O'
        }
        
        for (let array of winCondition){
            const [a,b,c] = array
            if (game.gameBoard[a] === winner && game.gameBoard[b] === winner && game.gameBoard[c] === winner){
                //dispatch winner
                winner === 'O' ? dispatch({type:'PLAYER_ONE_WINS'}) : dispatch({type:'PLAYER_TWO_WINS'});
                dispatch({type:'END_GAME'}) //end the game
                return ''
            }
        }
        //check draw
        const draw = game.gameBoard.every(cell=> cell !== '')
        if(draw){
            dispatch({type:'DRAW'})
        }
    }
    //checks for winner after a player moves
    useEffect(()=>{
        checkWinner()
    },[game.gameBoard])

    function newGame (){
        dispatch({type:'NEW_GAME'})
    }

    return (<>
    { !game.isEnded ? 
        game.gameBoard.map((cell,id)=>{
        {/* pass in the cell value in the game array, playerOne state, Ended state, and dispatch function
    playerOne state lets the cell decide whether to display 'X' or 'O' */}
        return <Box value={cell} otherState={{playerOne:game.playerOne,isEnded:game.isEnded}} id={id} dispatch={dispatch}
         key={id}/>
    }) :
        <EndCard result={game.result} newGame={newGame}/>
    }
    </>)
}

export default Board