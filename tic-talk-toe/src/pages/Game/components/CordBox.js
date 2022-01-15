import React, { useState, useRef, useEffect } from "react";
// import { turn } from "../Game";
const CordBox = (cords, { cordIndex }) => {
  const [mark, setMark] = useState("");

  // not sure whether to make "turn" value a string or boolean - if we're flipping between two players, which is easier to use?

  function toggleMark() {
    if (mark === "") {
      setMark("X");
    } else if (cords.currentState !== "") {
      setMark("");
    }
  }

  return (
    <div
      className="cords"
      id={`cord${cordIndex}`}
      onClick={toggleMark}
      currentState={mark}
      // changeTurn={changeTurn}
    >
      {mark}
    </div>
    // <select
    //   className="cords"
    //   id={`cord${cordIndex}`}
    //   currentState={turn}
    //   changeTurn={changeTurn}
    // >
    //   <option> </option>
    //   <option>X</option>
    //   <option>O</option>
    // </select>
  );
};
export default CordBox;
