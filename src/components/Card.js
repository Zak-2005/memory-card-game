import React from "react";

const Card = (props) =>{
    return (
       
        <img className = "card" key={props.uniqueID}src={props.src} onClick={(e)=>props.updateScore(props.uniqueID)}/>
    )
}

export default Card;