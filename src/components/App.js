import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
  };
  const startGame = () => {
    setRenderBall(true);
  };

  const move = (el) => {
    const ballPositionCopy = { ...ballPosition };
    if (el.key === "ArrowRight")
      ballPositionCopy.left = +ballPositionCopy.left.slice(0, -2) + 5 + "px";
    else if (el.key === "ArrowLeft")
      ballPositionCopy.left = +ballPositionCopy.left.slice(0, -2) - 5 + "px";
    else if (el.key === "ArrowUp")
      ballPositionCopy.top = +ballPositionCopy.top.slice(0, -2) - 5 + "px";
    else if (el.key === "ArrowDown")
      ballPositionCopy.top = +ballPositionCopy.top.slice(0, -2) + 5 + "px";
    setBallPosition(ballPositionCopy);
  };

  React.useEffect(() => {
    document.addEventListener("keydown", move);

    return () => {
      document.removeEventListener("keydown", move);
    };
  });

  const renderChoice = () => {
    if (renderBall) return <div className="ball" style={ballPosition}></div>;
    else
      return (
        <button onClick={startGame} className="reset">
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
