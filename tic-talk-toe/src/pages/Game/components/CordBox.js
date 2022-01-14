import React, { useState, useRef, useEffect } from "react";
const CordBox = ({ cordIndex }) => {
  const [submit, setSubmit] = useState(false);
  const [marked, setMarked] = useState(false);

  // Logic for each Cord box to know when it's been "marked"
  useEffect(() => {
    console.log(`cord${cordIndex}`.value);
    if (`cord${cordIndex}`?.value !== undefined) {
      setMarked(true);
    } else {
      setMarked(false);
      console.log(`cord${cordIndex}`?.value, marked);
    }
  }, [submit]);
  return (
    <select
      className="cords"
      id={`cord${cordIndex}`}
      onChange={() => setSubmit(!submit)}
    >
      <option>_</option>
      <option>X</option>
      <option>O</option>
    </select>
  );
};
export default CordBox;
