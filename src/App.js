import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import SubHeader from "./components/SubHeader";
import GenerateContent from "./components/GenerateContent";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  let availableImages = [
    "./Pictures/javascript.png",
    "./Pictures/typescript.png",
    "./Pictures/c.png",
    "./Pictures/c-2.png",
    "./Pictures/java.png",
  ];

  const generateSrc = () => {
    let imgSrc =
      availableImages[Math.floor(Math.random() * availableImages.length)];
    availableImages = availableImages.filter((src) => src !== imgSrc);
    return imgSrc;
  };

  useEffect(() => {
    generateSrc();
  }, []);

  let src1 = generateSrc();
  let src2 = generateSrc();
  let src3 = generateSrc();
  let src4 = generateSrc();
  let src5 = generateSrc();

  return (
    <div>
      <div className="header">Programming Memory Game!</div>
      <SubHeader score={score} bestScore={bestScore} />
      <GenerateContent cards={[src1, src2, src3, src4, src5]} />
    </div>
  );
}

export default App;
