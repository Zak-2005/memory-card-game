import logo from "./logo.svg";
import React, { useState, useEffect, createContext } from "react";
import SubHeader from "./components/SubHeader";
import GenerateContent from "./components/GenerateContent";
import WinnerScreen from "./components/WinnerScreen";
import "./App.css";

function App() {
  const [cardsClicked, setCardsClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [showWinnerScreen, setShowWinnerScreen] = useState(false);

  let availableImages = [
    "./Pictures/javascript.png",
    "./Pictures/typescript.png",
    "./Pictures/c.png",
    "./Pictures/c-2.png",
    "./Pictures/java.png",
    "./Pictures/kotlin.png",
    "./Pictures/python.png",
    "./Pictures/ruby.png",
    "./Pictures/rust.png",
    "./Pictures/csharp.png"
  ];

  const cards = availableImages.length;

  const generateSrc = () => {
    let imgSrc =
      availableImages[Math.floor(Math.random() * availableImages.length)];
    availableImages = availableImages.filter((src) => src !== imgSrc);
    return imgSrc;
  };

  const checkIfClicked = (card) => {
    for (let i = 0; i < cardsClicked.length; i++) {
      if (cardsClicked[i] === card) return true;
    }
    return false;
  };

  const updateScore = (card) => {
    let clicked = checkIfClicked(card);
    if (clicked) {
      if (bestScore < score) setBestScore(score);
      resetGame();
    } else {
      setScore(score + 1);
      setCardsClicked([...cardsClicked, card]);
    }
  };

  const resetGame = () => {
    if(showWinnerScreen){
      setBestScore(0)
      setShowWinnerScreen(false);
    }
    setScore(0);
    setCardsClicked([]);
    
  };

  useEffect(() => {
    generateSrc();
  }, []);

  useEffect(() => {
    if (score >= cards) {
      setShowWinnerScreen(true);
    } else {
      setShowWinnerScreen(false);
    }
  }, [score]);

  let src1 = generateSrc();
  let src2 = generateSrc();
  let src3 = generateSrc();
  let src4 = generateSrc();
  let src5 = generateSrc();
  let src6 = generateSrc();
  let src7 = generateSrc();
  let src8 = generateSrc();
  let src9 = generateSrc();
  let src10 = generateSrc();

  return (
    <div>
      {showWinnerScreen ? (
        <WinnerScreen resetGame={resetGame}/>
      ) : (
        <>
          <div className="header">Programming Memory Game!</div>
          <SubHeader currentScore={score} bestScore={bestScore} />
          <div className="mainContent">
          <GenerateContent
            cards={[src1, src2, src3, src4, src5,src6,src7,src8,src9,src10]}
            updateScore={updateScore}
          />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
