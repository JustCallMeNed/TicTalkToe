import React, { useEffect } from "react";
import { gsap } from "gsap";
import { socket } from "../Game";
// import room from "../../Chat/Chat";
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
  socket.connect("http://localhost:3001");
  // console.log(`${cordIndex} connected`);
  const sendMove = async () => {
    const boardData = {
      room: "TestRoom",
      author: "User",
      //swap out Test strings for room/logUser
      board: { ticBoard },
    };
    await socket.emit("send_board", { logUser, boardData });
    console.log("Marco!", logUser, boardData);
  };

  useEffect(() => {
    socket.on("receive_board", (boardData) => {
      console.log("Ping!", boardData.board);
      setTicBoard((boardData) => [boardData]);
    });
  }, [socket]);

  return (
    <div
      className="cords"
      id={`cord${cordIndex}`}
      onClick={() => {
        if (ticBoard[rowIndex][boxIndex] === "") {
          let copy = [...ticBoard];
          copy[rowIndex][boxIndex] = turn;
          sendMove(turn);
          //send ticBoard here -- "the thing I need to send is what I am setting ticboard to." > copy
          // console.log(copy);
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
          // console.log(logUser);
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
