import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CordBox from "./CordBox";
const CordsRow = ({
  turn,
  setTurn,
  ticBoard,
  setTicBoard,
  row,
  rowIndex,
  cordGrid,
  refresh,
  setRefresh,
}) => {
  const rowRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".cords",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.25, stagger: 0.15 }
    );
  }, []);

  // useEffect(() => {
  //   if (refresh === true) {
  //     setTicBoard([
  //       ["", "", ""],
  //       ["", "", ""],
  //       ["", "", ""],
  //     ]);
  //   }
  //   setRefresh(false);
  // }),
  //   [];
  //pass refresh value from Game.js, refresh whole row?

  return (
    <div className="rows" id={`${row}Row`} ref={rowRef}>
      {cordGrid.map((cord, boxIndex) => (
        <CordBox
          rowIndex={rowIndex}
          cordIndex={cord}
          boxIndex={boxIndex}
          turn={turn}
          setTurn={setTurn}
          ticBoard={ticBoard}
          setTicBoard={setTicBoard}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      ))}
    </div>
  );
};

export default CordsRow;
