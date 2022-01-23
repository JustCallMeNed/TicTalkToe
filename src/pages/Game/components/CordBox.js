import React, { useState, useEffect } from "react";
const CordBox = ({
  turn,
  setTurn,
  ticBoard,
  setTicBoard,
  cords,
  cordIndex,
  rowIndex,
  boxIndex,
  refresh,
  setRefresh,
}) => {
  const [mark, setMark] = useState("");
  // useEffect(() => {
  //   if (refresh === true) {
  //     setMark("");
  //   }
  //   return setRefresh(false);
  // }),
  //   [];
  // pass "refresh" value from Game.js, reset mark to empty string?

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
        } else if (cords.currentState !== "" || refresh === true) {
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
