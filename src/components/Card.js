import React from "react";

const Card = (props) =>{
    console.log(props.src)
    return (
       
        <img src={props.src}/>
    )
}

export default Card;