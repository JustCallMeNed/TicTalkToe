import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <nav id="nav">
        <Link class="link" to="/">
          <p>Home</p>
        </Link>
        <Link class="link" to="game">
          <p>Game</p>
        </Link>
        <Link class="link" to="form">
          <p>Form</p>
        </Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
