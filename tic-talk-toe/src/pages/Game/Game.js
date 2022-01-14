import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../Game/Game.css";
import CordsRow from "./components/CordsRow";
const Game = () => {
  // not sure whether to make "turn" value a string or boolean - if we're flipping between two players, which is easier to use?
  const [turn, setTurn] = useState("X");
  const boxRef = useRef(null);
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
    </>
  );
};

export default Game;
