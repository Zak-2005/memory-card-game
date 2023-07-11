import React from "react";
import Card from "./Card";
const GenerateContent = (props) => {

  return (
    props.cards.map((src, index)=>{
        return <Card key={index} src={src} updateScore={props.updateScore} uniqueID= {src}/>
    })
  )
};

export default GenerateContent