import React from "react";
const CordBox = ({
  turn,
  setTurn,
  ticBoard,
  setTicBoard,
  cordIndex,
  rowIndex,
  boxIndex,
}) => {
  return (
    <div
      className="cords"
      id={`cord${cordIndex}`}
      onClick={() => {
        if (ticBoard[rowIndex][boxIndex] === "") {
          let copy = [...ticBoard];
          copy[rowIndex][boxIndex] = turn;
          //send ticBoard here -- "the thing I need to send is what I am setting ticboard to." > copy
          console.log(ticBoard[rowIndex][boxIndex]);
          setTicBoard(copy);
          setTurn(turn === "X" ? "O" : "X");
        }
      }}
      currentState={ticBoard[rowIndex][boxIndex]}
    >
      {ticBoard[rowIndex][boxIndex]}
    </div>
  );
};
export default CordBox;
