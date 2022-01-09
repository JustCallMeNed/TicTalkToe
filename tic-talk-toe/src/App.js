import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Query from "./pages/Query";

function App() {
  return (
    <Router>
      <nav id="nav">
        <Link class="link" to="/">
          <p>Home</p>
        </Link>
        <Link class="link" to="query">
          <p>Query</p>
        </Link>
        <Link class="link" to="form">
          <p>Form</p>
        </Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="query" element={<Query />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
