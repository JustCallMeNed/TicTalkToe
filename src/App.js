import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat/Chat";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import PersistentDrawerLeft from "./pages/MUI/PersistentDrawerLeft";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile.js";
import { useState } from "react";

function App() {
  const [logUser, setLogUser] = useState(null);
  const pageContent = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile logUser={logUser} />} />
      <Route path="game" element={<Game playerName={logUser} />} />
      <Route path="login" element={<Login setLogUser={setLogUser} />} />
      <Route path="chat" element={<Chat logUser={logUser} />} />
    </Routes>
  );
  console.log(logUser);

  return (
    <>
      <Router>
        <PersistentDrawerLeft logUser={logUser} pageContent={pageContent} />
      </Router>
    </>
  );
}

export default App;
