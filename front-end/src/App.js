import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form/Form";
import Chat from "./pages/Chat/Chat";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import PersistentDrawerLeft from "./pages/MUI/PersistentDrawerLeft";

function App() {
  const pageContent = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="form" element={<Form />} />
      <Route path="game" element={<Game />} />
      <Route path="chat" element={<Chat />} />
    </Routes>
  );
  return (
    <>
      <Router>
        <PersistentDrawerLeft pageContent={pageContent} />
      </Router>
    </>
  );
}

export default App;
