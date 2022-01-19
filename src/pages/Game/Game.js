import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../Game/Game.css";
import CordsRow from "./components/CordsRow";
// import CordBox from "./components/CordBox";
const Game = () => {
  const boxRef = useRef(null);
  const [turn, setTurn] = useState("X");
  const [winState, setWinState] = useState(false);
  const [ticBoard, setTicBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360", opacity: 50 });
  }, []);

  useEffect(() => {
    if (winState === false) {
      //X/Y COORDINATES ARE LABELED BACKWARDS, BUT AT THIS POINT, FUCK IT
      for (let x = 0; x < ticBoard.length; x++) {
        const rowWinCheckX = ticBoard[x].every((rowIndex) => rowIndex === "X");
        const rowWinCheckO = ticBoard[x].every((rowIndex) => rowIndex === "O");
        for (let y = 0; y < ticBoard[x].length; y++) {
          if (x === 0 && ticBoard[x][y] !== "") {
            const colWinCheck =
              ticBoard[x][y] === ticBoard[x + 1][y] &&
              ticBoard[x + 1][y] === ticBoard[x + 2][y];
            if (colWinCheck === true) {
              setWinState(true);
            }
          }

          if (rowWinCheckX === true || rowWinCheckO === true) {
            setWinState(true);
          }
          const diagWinCheck0 =
            ticBoard[0][0] !== "" &&
            ticBoard[0][0] === ticBoard[1][1] &&
            ticBoard[1][1] === ticBoard[2][2];
          const diagWinCheck1 =
            ticBoard[0][2] !== "" &&
            ticBoard[0][2] === ticBoard[1][1] &&
            ticBoard[1][1] === ticBoard[2][0];

          if (diagWinCheck0 || diagWinCheck1) {
            setWinState(true);
          }
        }
      }
    }
  }, [turn]);
  // console.log(ticBoard[0][0], ticBoard[1][1], ticBoard[2][2]);
  console.log(ticBoard[0][2], ticBoard[1][1], ticBoard[2][0]);
  return (
    <>
      <div id="gameBoard" ref={boxRef}>
        <CordsRow
          rowIndex={0}
          cordGrid={[1, 2, 3]}
          row={"top"}
          turn={turn}
          setTurn={setTurn}
          ticBoard={ticBoard}
          setTicBoard={setTicBoard}
        />
        <CordsRow
          rowIndex={1}
          cordGrid={[4, 5, 6]}
          row={"middle"}
          turn={turn}
          setTurn={setTurn}
          ticBoard={ticBoard}
          setTicBoard={setTicBoard}
        />
        <CordsRow
          rowIndex={2}
          cordGrid={[7, 8, 9]}
          row={"bottom"}
          turn={turn}
          setTurn={setTurn}
          ticBoard={ticBoard}
          setTicBoard={setTicBoard}
        />
      </div>
      {winState === true ? (
        <div className="playerturn" id="winbanner">
          <h1>WINNER</h1>
        </div>
      ) : turn === "X" ? (
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
