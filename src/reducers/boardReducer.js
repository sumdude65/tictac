//updates gameboard state
function reducer(state, action) {
    switch (action.type) {
        //updates the game board
        case 'PLAYER_ONE':
            return {...state, gameBoard: state.gameBoard.map((cell, index) => {
                if (index === action.id) {//check if cell index = position in array
                    cell = 'O'
                    return cell
                }
                else return cell
            })}
        case 'PLAYER_TWO':
            return  {...state, gameBoard: state.gameBoard.map((cell, index) => {
                if (index === action.id) {//check if cell index = position in array
                    cell = 'X'
                    return cell
                }
                else return cell
            })}
        //handles game result state
        case 'PLAYER_ONE_WINS':
            return {...state, result:'PLAYER ONE WON'}
        case 'PLAYER_TWO_WINS':
            return {...state, result:'PLAYER TWO WON'}
        case 'DRAW':
            return {...state, result:'DRAW', isEnded: true}
        //updates active player
        case 'SWITCH_PLAYER':
            return {...state, playerOne:!state.playerOne}
        //ends the game
        case 'END_GAME':
            return {...state, isEnded:true}
        case 'NEW_GAME':
            return {
            gameBoard: Array(9).fill(''),
            playerOne:true,
            isEnded:false,
            result:''
            }
        default:
            return state
    }
}
export default reducer