import React from "react";
import Card from "./Card";
const GenerateContent = (props) => {
  return (
    props.cards.map((src)=>{
        return <Card src={src}/>
    })
  )
};

export default GenerateContent