const CordBox = ({ cordIndex }) => {
  return (
    <select className="cords" id={`cord${cordIndex}`}>
      <option>_</option>
      <option>X</option>
      <option>O</option>
    </select>
  );
};

export default CordBox;
