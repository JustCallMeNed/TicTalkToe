import React, { useEffect } from "react";
import { gsap } from "gsap";
// const sendMove = async () => {
//   if (currentMove !== "") {
//     const moveData = {
//       room: room,
//       author: username,
//       message: copy,
//     };
//   }
// };

// const sendMove = async () => {
//  const moveData = {
//       room: room,
//       author: username,
//       message: ticBoard[rowIndex][boxIndex],
//     };

//     await socket.emit("send_move", moveData);
//   };

const CordBox = ({
  turn,
  setTurn,
  ticBoard,
  setTicBoard,
  cordIndex,
  rowIndex,
  boxIndex,
  logUser,
}) => {
  return (
    <div
      className="cords"
      id={`cord${cordIndex}`}
      onClick={() => {
        if (ticBoard[rowIndex][boxIndex] === "") {
          let copy = [...ticBoard];
          copy[rowIndex][boxIndex] = turn;
          // sendMove(copy);
          //send ticBoard here -- "the thing I need to send is what I am setting ticboard to." > copy
          console.log(copy);
          setTicBoard(copy);
          setTurn(turn === "X" ? "O" : "X");
          gsap.timeline(
            gsap.fromTo(`#cord${cordIndex}`, { scale: 1 }, { scale: 0.8 }),
            gsap.fromTo(
              `#cord${cordIndex}`,
              { scale: 0.8 },
              { scale: 1, ease: "back" }
            )
          );
          console.log(logUser);
        }
      }}
      currentState={ticBoard[rowIndex][boxIndex]}
      logUser={logUser}
    >
      {ticBoard[rowIndex][boxIndex]}
    </div>
  );
};
export default CordBox;
