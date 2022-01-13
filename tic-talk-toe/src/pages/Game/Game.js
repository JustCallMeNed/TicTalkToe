import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../Game/Game.css";
import CordsRow from "./components/CordsRow";
const Game = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360", opacity: 50 });
  }, []);

  return (
    <>
      {/* <div className="box" ref={boxRef}>
        Hello.
      </div> */}
      <div id="gameBoard" ref={boxRef}>
        <CordsRow cordGrid={[1, 2, 3]} row={"top"} />
        <CordsRow cordGrid={[4, 5, 6]} row={"middle"} />
        <CordsRow cordGrid={[7, 8, 9]} row={"bottom"} />
      </div>
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
