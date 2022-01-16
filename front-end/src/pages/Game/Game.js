import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../Game/Game.css";
import CordsRow from "./components/CordsRow";
import CordBox from "./components/CordBox";
const Game = () => {
  const boxRef = useRef(null);
  const [turn, setTurn] = useState("X");
  const [winState, setWinState] = useState(false);
  const [ticBoard, setTicBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  //If I can't figure this out, google "2D Array Tic Tac Toe Win state"

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360", opacity: 50 });
  }, []);

  useEffect(() => {
    if (winState === false) {
      for (let x = 0; x < ticBoard.length; x++) {
        const rowWinCheckX = ticBoard[x].every((rowIndex) => rowIndex === "X");
        const rowWinCheckO = ticBoard[x].every((rowIndex) => rowIndex === "O");
        for (let y = 0; y < ticBoard[x].length; y++) {
          console.log(ticBoard[x][0], ticBoard[x][1], ticBoard[x][2]);
          console.log(y);
          const colWinCheckX =
            ticBoard[x][0] === "X" &&
            ticBoard[x][1] === "X" &&
            ticBoard[x][2] === "X";
          const colWinCheckO =
            ticBoard[x][0] === "O" &&
            ticBoard[x][1] === "O" &&
            ticBoard[x][2] === "O";
          if (rowWinCheckX || rowWinCheckO) {
            setWinState(true);
          }
          if (colWinCheckX || colWinCheckO) {
            setWinState(true);
          }
        }

        // const compareArray = [];
        // for (let y = 0; y < ticBoard[x].length; y++) {
        //   if (compareArray.length === 3) {
        //     compareArray = [];
        //     // console.log(compareArray);
        //   }
        //   if (compareArray.length < 3) {
        //     compareArray.push(ticBoard[x][y]);
        //     console.log(compareArray);
        //   }
        // }
        // if (compareArray.every((column) => column === "X")) {
        //   setWinState(true);
        // }
        // if (compareArray.every((column) => column === "O")) {
        //   setWinState(true);
        // }
      }
    }
  }, [turn]);
  console.log(winState);
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
