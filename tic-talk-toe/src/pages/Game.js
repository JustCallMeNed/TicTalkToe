const Query = () => {
  return (
    <div id="gameBoard">
      <div id="topRow">
        <select class="cords" id="cord1">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
        <select class="cords" id="cord2">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
        <select class="cords" id="cord3">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
      </div>
      <div id="middleRow">
        <select class="cords" id="cord4">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
        <select class="cords" id="cord5">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
        <select class="cords" id="cord6">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
      </div>
      <div id="bottomRow">
        <select class="cords" id="cord7">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
        <select class="cords" id="cord8">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
        <select class="cords" id="cord9">
          <option>_</option>
          <option>X</option>
          <option>O</option>
        </select>
      </div>
    </div>
  );
};

export default Query;
