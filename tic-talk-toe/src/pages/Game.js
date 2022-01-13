import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Game.css";
import CordsRow from "./Game/components/CordsRow";
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
    </>
  );
};

export default Game;
