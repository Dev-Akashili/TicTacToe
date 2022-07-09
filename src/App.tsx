import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import GameX from "./Pages/GameX";
import Button from "./Components/Button";
import Modal from "./Components/Modal";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Modal
                text="Welcome! Choose a player to start"
                buttonName1="Player X"
                buttonName2="Player 0"
              />
            }
          />
          <Route path="/game-box" element={<GameX />} />
          <Route
            path="/game-over"
            element={
              <Modal
                text="X WINS!"
                buttonName1="Play Again"
                buttonName2="Choose Sides"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
