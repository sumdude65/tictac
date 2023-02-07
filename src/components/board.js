import React,{useReducer} from "react";
import Box from "./box";

let gameState = Array(9).fill('')

//updates game state
function reducer (state,action){
    switch (action.type){
        case 'PLAYER_ONE':
            return state.map((cell,index)=>{
                if (index === action.id){//check if cell index = position in array
                    cell = 'O'
                }
            })
        case 'PLAYER_TWO':
                return state.map((cell,index)=>{
                    if (index === action.id){//check if cell index = position in array
                        cell = 'x'
                    }
                })
    }
}

const Board = () => {
    const [game,dispatch] = useReducer(reducer,gameState)

    return (<>
    {game.map((cell,id)=>{
        <Box value={cell} id={id} dispatch={dispatch} key={id}/>
    })}
    </>)
}

export default Board