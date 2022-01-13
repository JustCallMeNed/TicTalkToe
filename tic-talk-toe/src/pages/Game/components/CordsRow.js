import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CordBox from "./CordBox";
const CordsRow = ({ row, cordGrid }) => {
  const rowRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".cords",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.25, stagger: 0.15 }
    );
  }, []);
  return (
    <div id={`${row}Row`} ref={rowRef}>
      {cordGrid.map((cord) => (
        <CordBox cordIndex={cord} />
      ))}
    </div>
  );
};

export default CordsRow;
