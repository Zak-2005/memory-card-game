import React from "react";
const WinnerScreen = (props) => {
  return (
    <div>
      <div>You Win!</div>
      <button onClick={props.resetGame}>Play Again</button>
    </div>
  );
};
export default WinnerScreen;