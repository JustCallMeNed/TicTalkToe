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
}) => {
  const rowRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".cords",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.25, stagger: 0.15 }
    );
  }, []);

  return (
    <div className="rows" id={`${row}Row`} ref={rowRef}>
      {cordGrid.map((cord, boxIndex) => (
        <CordBox
          key={rowIndex + boxIndex}
          rowIndex={rowIndex}
          cordIndex={cord}
          boxIndex={boxIndex}
          turn={turn}
          setTurn={setTurn}
          ticBoard={ticBoard}
          setTicBoard={setTicBoard}
        />
      ))}
    </div>
  );
};

export default CordsRow;
