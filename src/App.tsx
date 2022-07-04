import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import GameX from "./Pages/GameX";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Modal text="Welcome! Choose a player to start" />}
      />
      <Route path="/game-box" element={<GameX />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
