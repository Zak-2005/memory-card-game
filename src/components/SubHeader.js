import React,{useState} from "react"

const SubHeader = (props)=>{
    return(
        <div>
            <div className="score">Score:{props.currentScore}</div>
            <div className="score">Best Score:{props.bestScore}</div>
        </div>
    )
}

export default SubHeader