import React from "react"

const SubHeader = (props)=>{
    return(
        <div className="subHeader">
            <div className>Score:{props.currentScore}</div>
            <div className>Best Score:{props.bestScore}</div>
        </div>
    )
}

export default SubHeader