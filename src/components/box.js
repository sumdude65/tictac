import React,{useState} from "react";

const Box = (props) =>{
    const [clicked,setClicked] = useState(false)
    const {dispatch, id, value} = props
    const {playerOne,isEnded} = props.otherState
    
    function handleClick (){
        if (isEnded){  //check if game has ended
            return ''
        }
        else if (clicked){  //check if button has already been clicked
            return ''
        }
        else {
            if (playerOne){
                dispatch({type:'PLAYER_ONE',id:id})
                dispatch({type:'SWITCH_PLAYER'})
                setClicked(true)
            }
            else{
                dispatch({type:'PLAYER_TWO',id:id})
                dispatch({type:'SWITCH_PLAYER'})
                setClicked(true)
            }
        }
    }
    return (
        <button className="cell" onClick={handleClick}>{value}</button>
    )
}
export default Box