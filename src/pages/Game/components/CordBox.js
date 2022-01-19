import React, { useState, useRef, useEffect } from "react";
const CordBox = ({
  turn,
  setTurn,
  ticBoard,
  setTicBoard,
  cords,
  cordIndex,
  rowIndex,
  boxIndex,
}) => {
  const [mark, setMark] = useState("");

  return (
    <div
      className="cords"
      id={`cord${cordIndex}`}
      onClick={() => {
        if (mark === "") {
          let copy = [...ticBoard];
          copy[rowIndex][boxIndex] = turn;
          setTicBoard(copy);
          setMark(turn);
          setTurn(turn === "X" ? "O" : "X");
        } else if (cords.currentState !== "") {
          setMark("");
        }
      }}
      currentState={mark}
    >
      {mark}
    </div>
  );
};
export default CordBox;
