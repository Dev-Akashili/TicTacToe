import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Grid from "../Layouts/Grid";
import Box from "../Components/Box";
import Header from "../Components/Header";
import GameLayout from "../Layouts/GameLayout";
import Modal from "../Components/Modal";

function GameX() {
  const [box1, setPlay1] = useState("");
  const [div2, setPlay2] = useState("");
  const [div3, setPlay3] = useState("");
  const [div4, setPlay4] = useState("");
  const [div5, setPlay5] = useState("");
  const [div6, setPlay6] = useState("");
  const [div7, setPlay7] = useState("");
  const [div8, setPlay8] = useState("");
  const [div9, setPlay9] = useState("");

  const navigate = useNavigate();
  const [start, setStart] = useState(true);
  const [side, setSide] = useState("X");
  const [win, setWin] = useState(false);

  const data = [
    "box1",
    "div2",
    "div3",
    "div4",
    "div5",
    "div6",
    "div7",
    "div8",
    "div9",
  ];

  function checkStart() {
    if (start) {
      setStart(false);
    }
  }

  function updateSide() {
    if (side === "X") {
      setSide("O");
    } else {
      setSide("X");
    }
  }

  function game(e: React.MouseEvent<HTMLElement>) {
    const current = e.currentTarget.id;
    const value = e.currentTarget.innerText;

    for (let i = 0; i < data.length; i++) {
      if (current === "box1") {
        if (box1 === "") {
          if (!start) {
            setPlay1(side);
            updateSide();
          } else {
            setPlay1("X");
            checkStart();
            updateSide();
          }
        }
      } else if (current === "div2") {
        if (div2 === "") {
          if (!start) {
            setPlay2(side);
            updateSide();
          } else {
            setPlay2("X");
            checkStart();
            updateSide();
          }
        }
      } else if (current === "div3") {
        if (div3 === "") {
          if (!start) {
            setPlay3(side);
            updateSide();
          } else {
            setPlay3("X");
            checkStart();
            updateSide();
          }
        }
      } else if (current === "div4") {
        if (div4 === "") {
          if (!start) {
            setPlay4(side);
            updateSide();
          } else {
            setPlay4("X");
            checkStart();
            updateSide();
          }
        }
      } else if (current === "div5") {
        if (div5 === "") {
          if (!start) {
            setPlay5(side);
            updateSide();
          } else {
            setPlay5("X");
            checkStart();
            updateSide();
          }
        }
      } else if (current === "div6") {
        if (div6 === "") {
          if (!start) {
            setPlay6(side);
            updateSide();
          } else {
            setPlay6("X");
            checkStart();
            updateSide();
          }
        }
      } else if (current === "div7") {
        if (div7 === "") {
          if (!start) {
            setPlay7(side);
            updateSide();
          } else {
            setPlay7("X");
            checkStart();
            updateSide();
          }
        }
      } else if (current === "div8") {
        if (div8 === "") {
          if (!start) {
            setPlay8(side);
            updateSide();
          } else {
            setPlay8("X");
            checkStart();
            updateSide();
          }
        }
      } else if (current === "div9") {
        if (div9 === "") {
          if (!start) {
            setPlay9(side);
            updateSide();
          } else {
            setPlay9("X");
            checkStart();
            updateSide();
          }
        }
      }
    }
  }

  function checkGame() {
    if (!start && box1 === div2 && div2 === div3) {
      setWin(true);
    } else if (div4 !== "" && div4 === div5 && div5 === div6) {
      setWin(true);
    } else if (div7 !== "" && div7 === div8 && div8 === div9) {
      setWin(true);
    } else if (box1 !== "" && box1 === div4 && div4 === div7) {
      setWin(true);
    } else if (div2 !== "" && div2 === div5 && div5 === div8) {
      setWin(true);
    } else if (div3 !== "" && div3 === div6 && div6 === div9) {
      setWin(true);
    } else if (box1 !== "" && box1 === div5 && div5 === div9) {
      setWin(true);
    } else if (div3 !== "" && div3 === div5 && div5 === div7) {
      setWin(true);
    }
    if (win) {
      navigate("/game-over");
    }
  }

  checkGame();

  if (win) {
    return (
      <Modal
        text={side + " WINS!"}
        buttonName1="Play Again"
        buttonName2="Choose Sides"
      />
    );
  } else {
    return (
      <GameLayout>
        <Header />
        <Grid>
          <Box name="box1" playerTile={box1} onClick={game} />
          <Box name="div2" playerTile={div2} onClick={game} />
          <Box name="div3" playerTile={div3} onClick={game} />
          <Box name="div4" playerTile={div4} onClick={game} />
          <Box name="div5" playerTile={div5} onClick={game} />
          <Box name="div6" playerTile={div6} onClick={game} />
          <Box name="div7" playerTile={div7} onClick={game} />
          <Box name="div8" playerTile={div8} onClick={game} />
          <Box name="div9" playerTile={div9} onClick={game} />
        </Grid>
      </GameLayout>
    );
  }
}

export default GameX;
