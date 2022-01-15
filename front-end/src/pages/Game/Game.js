import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../Game/Game.css";
import CordsRow from "./components/CordsRow";
import CordBox from "./components/CordBox";
const Game = () => {
  const boxRef = useRef(null);
  const [turn, setTurn] = useState("X");
  const [winState, setWinState] = useState(false);

  function changeTurn(cordGrid, row) {
    [cordGrid][row] = turn;
    setTurn((turn) => (turn === "X" ? "O" : "X"));
  }

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360", opacity: 50 });
  }, []);

  return (
    <>
      <div id="gameBoard" ref={boxRef}>
        <CordsRow cordGrid={[1, 2, 3]} row={"top"} />
        <CordsRow cordGrid={[4, 5, 6]} row={"middle"} />
        <CordsRow cordGrid={[7, 8, 9]} row={"bottom"} />
      </div>
      {turn === "X" ? (
        <div className="playerturn">
          <h1>Player One's Turn</h1>
        </div>
      ) : turn === "O" ? (
        <div className="playerturn">
          <h1>Player Two's Turn</h1>
        </div>
      ) : null}
      {/* VVV Widget Button that makes the board go WHOOOOOOOO - not permanent */}
      <div id="widgetBtn">
        <button
          onClick={(e) => {
            gsap.to(boxRef.current, {
              duration: 5,
              rotation: "+=11520",
              ease: "power1",
            });
          }}
        >
          Whee!
        </button>
      </div>
    </>
  );
};

export default Game;
